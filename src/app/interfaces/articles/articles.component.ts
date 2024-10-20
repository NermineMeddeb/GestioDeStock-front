import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto } from "../../../gs-api/src/models/article-dto";
import { ApiService } from "../../../gs-api/src/services/api.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articleDto: ArticleDto[] = [];
  listArticle: ArticleDto[] = [];
  errorMsg: string = '';

  constructor(private service: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(
      data => {
        this.articleDto = data;
        console.log('Données récupérées:', this.articleDto);
      },
      error => console.error('Erreur lors de la récupération des détails de l\'article', error)
    );
  }

  nouveauArticle(): void {
    console.log('Navigating to nouveau-article');
    this.router.navigate(['/dashbord/nouveau-article']);
  }

  findListArticle(): void {
    this.service.findAll().subscribe(articles => {
      this.listArticle = articles;
    }, error => {
      console.error('Erreur lors de la récupération de la liste des articles', error);
    });
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findListArticle();
    } else {
      this.errorMsg = event;
    }
  }
}
