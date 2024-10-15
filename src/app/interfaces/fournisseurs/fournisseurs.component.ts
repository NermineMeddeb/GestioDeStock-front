import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToNouveauFournisseur(): void {
    this.router.navigate(['/dashbord/nouveau-fournisseur']); // Redirige vers l'URL /nouvelle-commande
  }
}
