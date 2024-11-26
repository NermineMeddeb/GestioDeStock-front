import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrepriseDto } from 'src/gs-api/src/models';
import { EntreprisesService } from 'src/gs-api/src/services/EntreprisesService';



@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(
    private entreprisesService: EntreprisesService
  ) { }

  sinscrire(entreprise: EntrepriseDto): Observable<EntrepriseDto> {
    return this.entreprisesService.save(entreprise);
  }
}
