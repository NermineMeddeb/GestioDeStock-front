import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilisateurDto} from "../../../gs-api/src/models/utilisateur-dto";
import {UtilisateursService} from "../../../gs-api/src/services/UtilisateurService";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './Utilisateur.component.html',
  styleUrls: ['./Utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  UtilisateurDto: UtilisateurDto[]=[];

  constructor(private service: UtilisateursService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    
    this.service.findAll().subscribe(
      data => {
        this.UtilisateurDto = data;
        console.log('Données récupérées:', this.UtilisateurDto);
      },
      error => console.error('Erreur lors de la récupération des détails de l\'utulisateur', error)
    );
  }
  nouvelleUtilisateur(): void {
    this.router.navigate(['/dashbord/nouveau-utilisateur']);
  }

}

