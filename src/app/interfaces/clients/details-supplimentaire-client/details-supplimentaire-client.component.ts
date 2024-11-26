import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientServiceService } from 'src/app/Services/ClientService/client-service.service';
import { CommandeClientService } from 'src/app/Services/CommandeClient/commande-client.service';
import { ClientDto, CommandeClient } from 'src/gs-api/src/models';

@Component({
  selector: 'app-details-supplimentaire-client',
  templateUrl: './details-supplimentaire-client.component.html',
  styleUrls: ['./details-supplimentaire-client.component.css']
})
export class DetailsSupplimentaireClientComponent implements OnInit {
  idClient!: number;
  ClientDto!: ClientDto;
  CommandeClientDto!: CommandeClient;


  constructor(private route: ActivatedRoute, private router: Router,
              private clientService: ClientServiceService,private commendeclientService: CommandeClientService) { }

  ngOnInit(): void {
    // Récupérer l'ID du client depuis l'URL
    this.route.params.subscribe(params => {
      this.idClient = +params['idClient']; // Convertir en nombre si nécessaire
      this.loadClientDetails();
    });
  }

  // Fonction pour charger les détails du client
  loadClientDetails(): void {
    this.clientService.findClientById(this.idClient).subscribe(
      (client: ClientDto) => {
        this.ClientDto = client; // Assigner les données récupérées au ClientDto
      },
      (error) => {
        console.error('Erreur lors de la récupération des données du client : ', error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/dashbord/clients']); // Remplace cette ligne par le chemin que tu veux
  }
}
