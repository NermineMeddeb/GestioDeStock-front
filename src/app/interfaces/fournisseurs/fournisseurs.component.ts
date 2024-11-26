import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FournisseurDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  listFournisseur: Array<FournisseurDto> = [];
  errorMsg = '';
  constructor(private router: Router,
    private FournisseurService: ApiService) { }

    ngOnInit(): void {
      this.findAllfournisseurs();
    }
  findAllfournisseurs(): void {
    this.FournisseurService.findAllFournisseur()
      .subscribe(
        fournisseurs => {
          this.listFournisseur = fournisseurs;
        },
        error => {
          this.errorMsg = 'Erreur lors de la récupération des fournisseurs.';
          console.error(error);
        }
      );
  }
  goToNouveauFournisseur(): void {
    this.router.navigate(['/dashbord/nouveau-fournisseur']); // Redirige vers l'URL /nouvelle-commande
  }
  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllfournisseurs();
    } else {
      this.errorMsg = event;
    }}
}

