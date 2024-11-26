import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto, CategoryDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';
import { PhotosService } from 'src/gs-api/src/services/photoService';
import SavePhotoParams = PhotosService.SavePhotoParams;

@Component({
  selector: 'app-nouveau-article',
  templateUrl: './nouveau-article.component.html',
  styleUrls: ['./nouveau-article.component.css']
})
export class NouveauArticleComponent implements OnInit {
  articleDto: ArticleDto = {}; // Objet pour stocker les informations de l'article
  listeCategorie: Array<CategoryDto> = []; // Liste pour stocker toutes les catégories
  errorMsg: Array<string> = []; // Liste pour stocker les messages d'erreur
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/produit.png';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articleService: ApiService,
    private categoryService: ApiService,
    private photoService: PhotosService
  ) { }

  ngOnInit(): void {
    // Charger toutes les catégories
    this.categoryService.findAll().subscribe(categories => {
      this.listeCategorie = categories;
    });

    // Récupérer l'ID de l'article pour le mode édition
    const idArticle = this.activatedRoute.snapshot.params['idArticle'];
    if (idArticle) {
      this.articleService.findByIdArticle(idArticle).subscribe(article => {
        this.articleDto = article;
        // Charger l'image de l'article s'il y en a une
        this.imgUrl = article.photo ? `assets/${article.photo}` : 'assets/produit.png';
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/dashbord/articles']);
  }

  enregistrerArticle(): void {
    this.articleService.saveArticle(this.articleDto).subscribe(
      response => {
        this.router.navigate(['/dashbord/articles']);
      },
      error => {
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
      this.articleDto.prixUnitaireTtc =
        +this.articleDto.prixUnitaireHt + (+(this.articleDto.prixUnitaireHt * (this.articleDto.tauxTva / 100)));
    }
  }

  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = () => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }

  savePhoto(idArticle?: number, titre?: string): void {
    if (idArticle && titre && this.file) {
      const params: SavePhotoParams = {
        id: idArticle,
        file: this.file,
        title: titre,
        context: 'article'
      };
      this.photoService.savePhoto(params).subscribe(res => {
        this.router.navigate(['articles']);
      });
    } else {
      this.router.navigate(['articles']);
    }
  }
}
