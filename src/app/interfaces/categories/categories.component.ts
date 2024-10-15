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
  selectedCatIdToDelete ? = -1;
  errorMsgs = '';
  constructor(
    private router: Router,
    private categoryService: ApiService
  ) { }
  ngOnInit(): void {
    this.findAllCategories();

  }
  findAllCategories(): void {
    this.categoryService.findAll()
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

  confirmerEtSupprimerCat(): void {
    if (this.selectedCatIdToDelete !== -1) {
      this.categoryService.delete(this.selectedCatIdToDelete)
      .subscribe(res => {
        this.findAllCategories();
      }, error => {
        this.errorMsgs = error.error.message;
      });
    }
  }

  annulerSuppressionCat(): void {
    this.selectedCatIdToDelete = -1;
  }

  selectCatPourSupprimer(id?: number): void {
    this.selectedCatIdToDelete = id;
  }
}