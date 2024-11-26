import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'ng-packagr/lib/util/log';
import { ArticleDto, LigneCommandeFournisseurDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-nouvelle-commande-fournisseur',
  templateUrl: './nouvelle-commande-fournisseur.component.html',
  styleUrls: ['./nouvelle-commande-fournisseur.component.css']
})
export class NouvelleCommandeFournisseurComponent implements OnInit {

  selectedClientFournisseur: any = {};
  listClientsFournisseurs: Array<any> = [];
  searchedArticle: ArticleDto = {};
  listArticle: Array<ArticleDto> = [];
  codeArticle = '';
  quantite = '';
  codeCommande = '';

  lignesCommande: Array<any> = [];
  totalCommande = 0;
  articleNotYetSelected = false;
  errorMsg: Array<string> = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cltService: ApiService,
    private articleService: ApiService,
    private cmdCltService: ApiService
  ) { }
  ngOnInit(): void {
   
    this.findAllClientsFournisseurs();
    this.findAllArticles();
  }
  cancel(): void {
    this.router.navigate(['/dashbord/commande-client']); // Redirection vers la liste des fournisseurs
  }
  findAllClientsFournisseurs(): void {
      this.cltService.findAllCommandesFournisseurs()
      .subscribe(clients => {
        this.listClientsFournisseurs = clients;
      });
  }
  findAllArticles(): void {
    this.articleService.findAll()
    .subscribe(articles => {
      this.listArticle = articles;
    });
  }
  filtrerArticle(): void {
    if (this.codeArticle.length === 0) {
      this.findAllArticles();
    }
    this.listArticle = this.listArticle
    .filter(art => art.codeArticle?.includes(this.codeArticle) || art.designation?.includes(this.codeArticle));
  }

  ajouterLigneCommande(): void {
    this.checkLigneCommande();
    this.calculerTotalCommande();

    this.searchedArticle = {};
    this.quantite = '';
    this.codeArticle = '';
    this.articleNotYetSelected = false;
    this.findAllArticles();
  }

  calculerTotalCommande(): void {
    this.totalCommande = 0;
    this.lignesCommande.forEach(ligne => {
      if (ligne.prixUnitaire && ligne.quantite) {
        this.totalCommande += +ligne.prixUnitaire * +ligne.quantite;
      }
    });
  }

  private checkLigneCommande(): void {
    const ligneCmdAlreadyExists = this.lignesCommande.find(lig => lig.article?.codeArticle === this.searchedArticle.codeArticle);
    if (ligneCmdAlreadyExists) {
      this.lignesCommande.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedArticle.codeArticle) {
          // @ts-ignore
          lig.quantite = lig.quantite + +this.quantite;
        }
      });
    } else {
      const ligneCmd: LigneCommandeFournisseurDto = {
        article: this.searchedArticle,
        prixUnitaire: this.searchedArticle.prixUnitaireTtc,
        quantite: +this.quantite
      };
      this.lignesCommande.push(ligneCmd);
    }
  }

  selectArticleClick(article: ArticleDto): void {
    this.searchedArticle = article;
    this.codeArticle = article.codeArticle ? article.codeArticle : '';
    this.articleNotYetSelected = true;
  }
  private preparerCommande(): any {
    return {
        client: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: this.formatDate(new Date()), // Utilisation de la méthode pour formater la date
        etatCommande: 'EN_PREPARATION',
        ligneCommandeClients: this.lignesCommande
    };
}// Méthode pour formater la date au format 'YYYY-MM-DD'
private formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ajouter un zéro devant si nécessaire
  const day = String(date.getDate()).padStart(2, '0'); // Ajouter un zéro devant si nécessaire
  return `${year}-${month}-${day}`; // Retourne la date au format 'YYYY-MM-DD'
}
enregistrerCommande(): void {
  const commande = this.preparerCommande(); // Assurez-vous que ceci retourne un objet CommandeClientDto
  console.log(commande); // Vérifiez la structure de l'objet
  this.cmdCltService.saveCommandeClient(commande)
  
      .subscribe(cmd => {
          this.router.navigate(['dashbord/commande-client']);
      }, error => {
          if (error.error && error.error.errors) {
              this.errorMsg = error.error.errors;
          } else {
              this.errorMsg = ['Une erreur inconnue est survenue.'];
          }
      });
}

    
}

  
