import { Injectable } from '@angular/core';
import { ApiService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';
import { Observable, of } from 'rxjs';
import { CommandeFournisseurDto, LigneCommandeFournisseurDto } from 'src/gs-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class CommandeFournisseurService {

  constructor( private commandefournisseurService: ApiService,
    private commandeFournisseurService: ApiService,
    private userService: UserService) { }
  enregistrerCommandeClient(commandeClient: CommandeFournisseurDto): Observable<CommandeFournisseurDto> {
    commandeClient.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.commandefournisseurService.saveCommandeClient(commandeClient);
  }

  findAllCommandesClient(): Observable<CommandeFournisseurDto[]> {
    return this.commandefournisseurService.findAll();
  }

  

  findAllLigneCommandesClient(idCmd?: number): Observable<LigneCommandeFournisseurDto[]> {
    if (idCmd) {
      return this.commandefournisseurService.findAllLignesCommandesByCommandeClientId(idCmd);
    }
    return of([]); // Retourne un tableau vide si idCmd n'est pas fourni

  }
}
