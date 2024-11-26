import { Component, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/gs-api/src/services';
import { ClientDto } from '../../../gs-api/src/models/client-dto';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/Services/article/article.service';
import { EventEmitter } from '@angular/core';
import { ClientServiceService } from 'src/app/Services/ClientService/client-service.service';
@Component({
  selector: 'app-details-clients',
  templateUrl: './details-clients.component.html',
  styleUrls: ['./details-clients.component.css']
})
export class DetailsClientsComponent implements OnInit {
  @Input() ClientDto!: ClientDto;
  @Output()
  suppressionResult = new EventEmitter();

  constructor( private router: Router,
    private clientService: ClientServiceService) { }

  ngOnInit(): void {    

  }
  confirmerEtSupprimerClient(): void {
    console.log('Tentative de suppression de client avec ID :', { idClient: this.ClientDto.id });
    if (this.ClientDto.id) {
      this.clientService.deleteClient(this.ClientDto.id)
      .subscribe(res => {
        this.suppressionResult.emit('success');
      }, error => {
        this.suppressionResult.emit(error.error.error);
      });
    }}

    
    modifierClient(): void {
      this.router.navigate(['/dashbord/nouveau-client', { idClient: this.ClientDto.id }]);
    } 
    AfficherDetailsSupplimentaire(): void {
      this.router.navigate(['/dashbord/clients/DetailsSupplimentaireClient', { idClient: this.ClientDto.id }]);
    }
      
      
    }
