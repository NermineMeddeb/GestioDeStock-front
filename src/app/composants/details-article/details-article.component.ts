
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/gs-api/src/services';
import { ArticleDto } from '../../../gs-api/src/models/article-dto';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent {
  @Input() articleDto!: ArticleDto;
  @Output()
  suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    private articleService: ApiService
  ) { }

  ngOnInit(): void {
  }

  modifierArticle(): void {
    this.router.navigate(['/dashbord/nouveau-article', this.articleDto.id]);
  }
  

  confirmerEtSupprimerArticle(): void {
    console.log('Tentative de suppression de l\'article avec ID :', this.articleDto.id);
    if (this.articleDto.id) {
      this.articleService.deleteArticle(this.articleDto.id)
        .subscribe({
          next: (res) => {
            console.log('Suppression réussie');
            this.suppressionResult.emit('success');
          },
          error: (error) => {
            console.error('Erreur lors de la suppression de l\'article:', error);
            this.suppressionResult.emit(error.error?.error || 'Erreur inconnue');
          }
        });
    }
  }
  
  
}