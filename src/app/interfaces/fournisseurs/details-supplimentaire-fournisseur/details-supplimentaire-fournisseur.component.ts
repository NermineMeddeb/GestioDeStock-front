import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeFournisseurService } from 'src/app/Services/CommandeFournisseur/commande-fournisseur.service';
import { FournisseurServiceService } from 'src/app/Services/Fournisseur/fournisseur-service.service';
import { CommandeFournisseur, FournisseurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-details-supplimentaire-fournisseur',
  templateUrl: './details-supplimentaire-fournisseur.component.html',
  styleUrls: ['./details-supplimentaire-fournisseur.component.css']
})
export class DetailsSupplimentaireFournisseurComponent implements OnInit {

  idFournisseur!: number;
  FournisseurDto!: FournisseurDto;
  CommandeFournisseurDto!: CommandeFournisseur;

  constructor(private route: ActivatedRoute, private router: Router,
              private fournisseurService: FournisseurServiceService, private commendefournisseurService: CommandeFournisseurService) { }

  ngOnInit(): void {
    // Récupérer l'ID du fournisseur depuis l'URL
    this.route.params.subscribe(params => {
      this.idFournisseur = +params['idFournisseur']; // Convertir en nombre si nécessaire
      this.loadClientDetails();
    });
  }

  // Fonction pour charger les détails du fournisseur
  loadClientDetails(): void {
    this.fournisseurService.findFournisseurById(this.idFournisseur).subscribe(
      (client: FournisseurDto) => {
        this.FournisseurDto = client; // Assigner les données récupérées au FournisseurDto
      },
      (error) => {
        console.error('Erreur lors de la récupération des données du fournisseur : ', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/dashbord/fournisseurs']); // Remplace cette ligne par le chemin que tu veux
  }
}
