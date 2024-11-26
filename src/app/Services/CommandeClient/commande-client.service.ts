import { Injectable } from '@angular/core';
import { ApiService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';
import { CommandeClientDto, CommandeFournisseurDto, LigneCommandeClientDto } from 'src/gs-api/src/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeClientService {

  constructor(
    private commandeClientService: ApiService,
    private commandeFournisseurService: ApiService,
    private userService: UserService
  ) { }

  enregistrerCommandeClient(commandeClient: CommandeClientDto): Observable<CommandeClientDto> {
    commandeClient.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.commandeClientService.saveCommandeClient(commandeClient);
  }

  findAllCommandesClient(): Observable<CommandeClientDto[]> {
    return this.commandeClientService.findAll();
  }

  

  findAllLigneCommandesClient(idCmd?: number): Observable<LigneCommandeClientDto[]> {
    if (idCmd) {
      return this.commandeClientService.findAllLignesCommandesByCommandeClientId(idCmd);
    }
    return of([]); // Retourne un tableau vide si idCmd n'est pas fourni

  }
}
  