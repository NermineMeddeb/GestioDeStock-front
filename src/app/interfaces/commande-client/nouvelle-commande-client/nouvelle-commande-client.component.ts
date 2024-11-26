import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto, CommandeClientDto, LigneCommandeClientDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-nouvelle-commande-client',
  templateUrl: './nouvelle-commande-client.component.html',
  styleUrls: ['./nouvelle-commande-client.component.css']
})
export class NouvelleCommandeClientComponent implements OnInit {
  
  selectedClientFournisseur: any = {};
  listClientsFournisseurs: Array<any> = [];
  searchedArticle: ArticleDto = {};
  listArticle: Array<ArticleDto> = [];
  codeArticle = '';
  quantite = '';
  codeCommande = '';

  lignesCommande: Array<LigneCommandeClientDto> = [];
  totalCommande = 0;
  articleNotYetSelected = false;
  errorMsg: Array<string> = [];
  idCommande: string | null = null; // ID de commande pour modification

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cltService: ApiService,
    private articleService: ApiService,
    private cmdCltService: ApiService
  ) {}

  ngOnInit(): void {
    this.findAllClientsFournisseurs();
    this.findAllArticles();

    // Vérifier si un ID de commande est passé dans l'URL
    this.idCommande = this.activatedRoute.snapshot.paramMap.get('idCommande');
    if (this.idCommande) {
      this.loadCommandeExistante();
    }
  }

  cancel(): void {
    this.router.navigate(['/dashbord/commande-client']); // Redirection vers la liste des commandes
  }

  findAllClientsFournisseurs(): void {
    this.cltService.findAll_client().subscribe(clients => {
      this.listClientsFournisseurs = clients;
    });
  }

  findAllArticles(): void {
    this.articleService.findAll().subscribe(articles => {
      this.listArticle = articles;
    });
  }

  filtrerArticle(): void {
    if (this.codeArticle.length === 0) {
      this.findAllArticles();
    }
    this.listArticle = this.listArticle.filter(
      art => art.codeArticle?.includes(this.codeArticle) || art.designation?.includes(this.codeArticle)
    );
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
    const ligneCmdAlreadyExists = this.lignesCommande.find(
      lig => lig.article?.codeArticle === this.searchedArticle.codeArticle
    );
    if (ligneCmdAlreadyExists) {
      this.lignesCommande.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedArticle.codeArticle) {
          // @ts-ignore
          lig.quantite = lig.quantite + +this.quantite;
        }
      });
    } else {
      const ligneCmd: LigneCommandeClientDto = {
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
      dateCommande: this.formatDate(new Date()),
      etatCommande: 'EN_PREPARATION',
      ligneCommandeClients: this.lignesCommande
    };
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  enregistrerCommande(): void {
    const commande = this.preparerCommande();
    if (this.idCommande) {
      this.cmdCltService.updateClientInCommandeClient(this.idCommande, this.selectedClientFournisseur.id).subscribe(
        () => this.router.navigate(['dashbord/commande-client']),
        error => this.handleError(error)
      );
    } else {
      this.cmdCltService.saveCommandeClient(commande).subscribe(
        () => this.router.navigate(['dashbord/commande-client']),
        error => this.handleError(error)
      );
    }
  }

  loadCommandeExistante(): void {
    if (this.idCommande) {
      this.cmdCltService.findCommandeClientById(this.idCommande).subscribe(commande => {
        this.selectedClientFournisseur = commande.client;
        this.codeCommande = commande.code ?? '';
        this.lignesCommande = commande.ligneCommandeClients || [];
        this.calculerTotalCommande();
      });
    }
  }

  modifierArticle(idLigneCommande: any, idArticle: any): void {
    if (this.idCommande) {
      this.cmdCltService.updateArticleInCommandeClient(this.idCommande, idLigneCommande, idArticle).subscribe(
        commande => {
          this.lignesCommande = commande.ligneCommandeClients || [];
          this.calculerTotalCommande();
        },
        error => this.handleError(error)
      );
    }
  }

  modifierQuantite(idLigneCommande: any, quantite: any): void {
    if (this.idCommande) {
      this.cmdCltService.updateQuantiteInCommandeClient(this.idCommande, idLigneCommande, quantite).subscribe(
        commande => {
          this.lignesCommande = commande.ligneCommandeClients || [];
          this.calculerTotalCommande();
        },
        error => this.handleError(error)
      );
    }
  }

  private handleError(error: any): void {
    if (error.error && error.error.errors) {
      this.errorMsg = error.error.errors;
    } else {
      this.errorMsg = ['Une erreur inconnue est survenue.'];
    }
  }
}
