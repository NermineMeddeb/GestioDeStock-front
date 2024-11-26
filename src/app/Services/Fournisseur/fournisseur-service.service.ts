import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FournisseurDto } from 'src/gs-api/src/models';
import { UserService } from '../user/user.service';
import { ApiService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class FournisseurServiceService {

  constructor(
    private userService: UserService,
    private FournisseurService: ApiService,
  ) { }

  enregistrerFournisseur(FournisseurDto: FournisseurDto): Observable<FournisseurDto> {
    FournisseurDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.FournisseurService.save(FournisseurDto);
  }
  
 

  findAllFournisseur(): Observable<FournisseurDto[]> {
    return this.FournisseurService.findAllFournisseur();
  }
  deleteFournisseur(idFournisseur: number): Observable<any> {
    if (idFournisseur) {
      return this.FournisseurService.delete(idFournisseur);
    }
    return of();
  }
  findFournisseurById(id: number): Observable<FournisseurDto> {
    if (id) {
      return this.FournisseurService.findByIdFournisseur(id);
    }
    return of();
  }

}
