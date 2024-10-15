import { Injectable } from '@angular/core';
import {UserService} from '../user/user.service';
import {ApiService} from '../../../gs-api/src/./services/api.service';
import {CategoryDto} from '../../../gs-api/src/models/category-dto';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
   private userService: UserService,
    private categoryService: ApiService
  ) { }

  enregistrerCategorie(categoryDto: CategoryDto): Observable<CategoryDto> {
    // Assurez-vous que vous avez bien une instance de CategoryDto
    categoryDto.idEntreprise = this.userService.getConnectedUser()?.entreprise?.id;
  
    // Passez l'instance de categoryDto à la méthode savecategories
    return this.categoryService.savecategories(categoryDto);
  }
  findAll(): Observable<CategoryDto[]> {
    return this.categoryService.findAll_categories();
  }

  findById(idCategory: number): Observable<CategoryDto> {
    return this.categoryService.findById(idCategory);
  }

  delete(idCategorie?: number): Observable<any> {
    if (idCategorie) {
      return this.categoryService.delete(idCategorie);
    }
    return of();
  }
}