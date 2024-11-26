import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurDto } from 'src/gs-api/src/models/utilisateur-dto';
import { UtilisateursService } from 'src/gs-api/src/services/UtilisateurService';

@Component({
  selector: 'app-details-supplimentaire-utilisateur',
  templateUrl: './details-supplimentaire-utilisateur.component.html',
  styleUrls: ['./details-supplimentaire-utilisateur.component.css']
})
export class DetailsSupplimentaireUtilisateurComponent implements OnInit {
  idutilisateur!: number;
  UtilisateurDto!: UtilisateurDto;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private utilisateurService: UtilisateursService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idParam = params['idutilisateur'];
      if (!isNaN(Number(idParam))) {
        this.idutilisateur = +idParam;
        this.loadUtilisateurDetails();
      } else {
        console.error('ID utilisateur invalide:', idParam);
        this.router.navigate(['/dashbord/utilisateur']);
      }
    });
  }

  loadUtilisateurDetails(): void {
    this.utilisateurService.findById(this.idutilisateur).subscribe(
      (utilisateur: UtilisateurDto) => {
        this.UtilisateurDto = utilisateur;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/dashbord/utilisateur']);
  }
}
