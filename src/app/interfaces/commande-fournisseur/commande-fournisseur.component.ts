import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande-fournisseur',
  templateUrl: './commande-fournisseur.component.html',
  styleUrls: ['./commande-fournisseur.component.css']
})
export class CommandeFournisseurComponent implements OnInit {
  constructor(private router: Router) { }



  ngOnInit(): void {
  }
  goToNouvelleCommande(): void {
    this.router.navigate(['/dashbord/nouvelle-commande-fournisseur']); // Redirige vers l'URL /nouvelle-commande
  }
}
