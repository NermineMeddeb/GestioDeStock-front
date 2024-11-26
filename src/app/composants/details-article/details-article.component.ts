import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/gs-api/src/services';
import { ArticleDto } from '../../../gs-api/src/models/article-dto';
import { LoaderService } from 'src/app/composants/loader/service/loader.service';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  @Input() articleDto!: ArticleDto;
  @Output() suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    private articleService: ApiService,
    private loaderService: LoaderService // Ajout du LoaderService
  ) { }

  ngOnInit(): void { }

  modifierArticle(): void {
    this.router.navigate(['/dashbord/nouveau-article', { idArticle: this.articleDto.id }]);
  }

  confirmerEtSupprimerArticle(): void {
    console.log('Tentative de suppression de l\'article avec ID :', this.articleDto.id);
    if (this.articleDto.id) {
      // Afficher le loader avant de commencer la suppression
      this.loaderService.show();

      this.articleService.deleteArticle(this.articleDto.id)
        .subscribe({
          next: (res) => {
            console.log('Suppression réussie');
            this.suppressionResult.emit('success');

            // Cacher le loader après la suppression
            this.loaderService.hide();

            // Rafraîchir ou naviguer si nécessaire
            this.router.navigate(['/dashbord/articles']);
          },
          error: (error) => {
            console.error('Erreur lors de la suppression de l\'article:', error);

            // Cacher le loader en cas d'erreur
            this.loaderService.hide();
            this.suppressionResult.emit(error.error?.error || 'Erreur inconnue');
          }
        });
    }
  }
}
