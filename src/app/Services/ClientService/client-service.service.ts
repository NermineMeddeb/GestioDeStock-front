import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClientDto } from 'src/gs-api/src/models';
import { UserService } from '../user/user.service';
import { ApiService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  constructor(
    private userService: UserService,
    private clientService: ApiService,
  ) { }

  enregistrerClient(clientDto: ClientDto): Observable<ClientDto> {
    clientDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.clientService.SaveClient(clientDto);
  }

 

  findAllClients(): Observable<ClientDto[]> {
    return this.clientService.findAll();
  }



  findClientById(id: number): Observable<ClientDto> {
    if (id) {
      return this.clientService.findByIdClient(id);
    }
    return of();
  }


  deleteClient(idClient: number): Observable<any> {
    if (idClient) {
      return this.clientService.deleteClient(idClient);
    }
    return of();
  }}
