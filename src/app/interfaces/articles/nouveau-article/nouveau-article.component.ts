import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-article',
  templateUrl: './nouveau-article.component.html',
  styleUrls: ['./nouveau-article.component.css']
})
export class NouveauArticleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['/dashbord/articles']); 
  }
}
