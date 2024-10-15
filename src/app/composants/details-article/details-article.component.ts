import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/gs-api/src/services';
import { ArticleDto } from '../../../gs-api/src/models/article-dto';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  articleDto: ArticleDto | null = null;

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID de l\'article:', id);
    if (id) {
      this.service.findByIdArticle(id).subscribe(
        data => {
          this.articleDto = data;
          console.log('Données récupérées:', this.articleDto);
        },
        error => console.error('Erreur lors de la récupération des détails de l\'article', error)
      );
    } else {
      console.error('Aucun ID trouvé dans l\'URL');
    }
  }
}
