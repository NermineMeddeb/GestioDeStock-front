import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  listClient: Array<ClientDto> = [];
  errorMsg = '';


  constructor( private router: Router,
    private cltService: ApiService) { }

  ngOnInit(): void {
    this.findAllClients();
  }

  findAllClients(): void {
    this.cltService.findAll_client()
    .subscribe(clients => {
      this.listClient = clients;
    });
  }
  goToNouveauClient(): void {
    this.router.navigate(['/dashbord/nouveau-client']); // Redirige vers l'URL /nouvelle-commande
  }
}
