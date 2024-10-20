import { Component, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/gs-api/src/services';
import { ClientDto } from '../../../gs-api/src/models/client-dto';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/Services/article/article.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-details-clients',
  templateUrl: './details-clients.component.html',
  styleUrls: ['./details-clients.component.css']
})
export class DetailsClientsComponent implements OnInit {
  @Input() ClientDto!: ClientDto;
  @Output()
  suppressionResult = new EventEmitter();

  constructor( private router: Router,
    private articleService: ArticleService) { }

  ngOnInit(): void {
  }
  confirmerEtSupprimerClient(): void {
    if (this.ClientDto.id) {
      this.articleService.deleteArticle(this.ClientDto.id)
      .subscribe(res => {
        this.suppressionResult.emit('success');
      }, error => {
        this.suppressionResult.emit(error.error.error);
      });
    }}
}
