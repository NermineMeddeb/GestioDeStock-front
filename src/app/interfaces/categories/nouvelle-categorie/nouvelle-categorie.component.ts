import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDto } from '../../../../gs-api/src/models/category-dto';
import { ApiService } from '../../../../gs-api/src/services/api.service';

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.css']
})
export class NouvelleCategorieComponent implements OnInit {
  categoryDto: CategoryDto = {}; // Assurez-vous d'initialiser categoryDto
  errorMsg: string | null = null; // Pour stocker les messages d'erreur

  constructor(private router: Router, private apiService: ApiService) { } // Injection d'ApiService

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/dashbord/categories']); 
  }

  enregistrerCategorie(): void {
    this.apiService.savecategories(this.categoryDto) // Utilisez this.apiService
    .subscribe(
      res => {
        this.router.navigate(['/dashbord/categories']); // Rediriger vers la liste des catégories
      }, 
      error => {
        this.errorMsg = error.error.errors; // Gestion des erreurs
      }
    );
  }
}
