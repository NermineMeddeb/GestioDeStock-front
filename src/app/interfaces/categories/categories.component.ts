import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CategoryDto} from '../../../gs-api/src/models/category-dto';
import { ApiService } from '../../../gs-api/src/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  listCategories: Array<CategoryDto> = [];
  selectedCatIdToDelete: number | null = null;
    errorMsgs = '';
  constructor(
    private router: Router,
    private categoryService: ApiService
  ) { }
  ngOnInit(): void {
    this.findAllCategories();

  }
  findAllCategories(): void {
    this.categoryService.findAll_categories()
    .subscribe(res => {
      this.listCategories = res;
    });
  }
  goToNouvelleCategorie(): void {
    this.router.navigate(['/dashbord/nouvelle-categorie']); // Redirige vers l'URL /nouvelle-commande
  }



  


  modifierCategory(id?: number): void {
    this.router.navigate(['/dashbord/nouvelle-categorie', id]);
  }

  selectCatPourSupprimer(id: number=0): void {
      this.categoryService.delete_cat(id)
      .subscribe(res => {
        console.log("Catégorie supprimée avec succès :", res);
        this.findAllCategories();
      }, error => {
        console.error("Erreur lors de la suppression :", error);
        this.errorMsgs = error.error.message;
      });
    
  }

 


}