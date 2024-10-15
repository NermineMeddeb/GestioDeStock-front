import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-commande-fournisseur',
  templateUrl: './nouvelle-commande-fournisseur.component.html',
  styleUrls: ['./nouvelle-commande-fournisseur.component.css']
})
export class NouvelleCommandeFournisseurComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['/dashbord/commande-fournisseur']); // Redirection vers la liste des fournisseurs
  }
}
