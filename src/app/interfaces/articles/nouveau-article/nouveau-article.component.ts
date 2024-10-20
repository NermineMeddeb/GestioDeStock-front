import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'ng-packagr/lib/util/log';
import { ArticleDto, CategoryDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-nouveau-article', // Le sélecteur du composant, utilisé dans le HTML
  templateUrl: './nouveau-article.component.html', // Chemin vers le template HTML du composant
  styleUrls: ['./nouveau-article.component.css'] // Chemin vers le fichier CSS du composant
})
export class NouveauArticleComponent implements OnInit {
  articleDto: ArticleDto = {}; // Objet pour stocker les informations de l'article
  categorieDto: CategoryDto = {}; // Objet pour stocker les informations de la catégorie
  listeCategorie: Array<CategoryDto> = []; // Liste pour stocker toutes les catégories
  errorMsg: Array<string> = []; // Liste pour stocker les messages d'erreur

  constructor(
    private router: Router, // Service pour naviguer entre les routes
    private activatedRoute: ActivatedRoute, // Service pour accéder aux paramètres de la route
    private articleService: ApiService, // Service pour interagir avec les articles
    private categoryService: ApiService // Service pour interagir avec les catégories
  ) { }

  ngOnInit(): void {
    // Récupération de toutes les catégories au démarrage du composant
    this.categoryService.findAll()
      .subscribe(categories => {
        this.listeCategorie = categories; // Stockage des catégories récupérées
      });

    // Récupération de l'ID de l'article depuis les paramètres de la route
    const idArticle = this.activatedRoute.snapshot.params['idArticle'];
    if (idArticle) {
      // Si un ID d'article est fourni, on cherche les détails de cet article
      this.articleService.findByIdArticle(idArticle)
        .subscribe(article => {
          this.articleDto = article; // Stockage des détails de l'article récupéré
          // Si l'article a une catégorie, on la stocke aussi
          this.categorieDto = this.articleDto.category ? this.articleDto.category : {};
        });
    }
  }

  // Méthode pour annuler l'opération et revenir à la liste des articles
  cancel(): void {
    this.router.navigate(['/dashbord/articles']);
  }
  enregistrerArticle(): void {
    console.log(this.articleDto)
    this.articleService.saveArticle(this.articleDto)
      .subscribe(
        response => {
          // Redirection ou affichage d'un message de succès
          this.router.navigate(['/dashbord/articles']);
        },
        error => {
          // Vérification de l'objet d'erreur avant d'accéder à `errors`
          if (error && error.error && error.error.messages) {
            this.errorMsg = error.error.messages;
          } else {
            this.errorMsg = ["Une erreur est survenue lors de l'enregistrement."];
          }
        }
      );
  }
  calculerTTC(): void {
    if (this.articleDto.prixUnitaireHt && this.articleDto.tauxTva) {
      //la formule de calculle de TTC= prixHT + (prixHT * (tauxTVA / 100))
      //on ajouter des + pour le consommer en nummber puisque blech bihom yefhmou chaine
      this.articleDto.prixUnitaireTtc =
        +this.articleDto.prixUnitaireHt + (+(this.articleDto.prixUnitaireHt * (this.articleDto.tauxTva / 100)));
    }
  }

}
