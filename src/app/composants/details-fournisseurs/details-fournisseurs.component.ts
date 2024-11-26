import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FournisseurServiceService } from 'src/app/Services/Fournisseur/fournisseur-service.service';
import { FournisseurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-details-fournisseurs',
  templateUrl: './details-fournisseurs.component.html',
  styleUrls: ['./details-fournisseurs.component.css']
})
export class DetailsFournisseursComponent implements OnInit {
  @Input() FournisseurDto!: FournisseurDto;
  @Output()
  suppressionResult = new EventEmitter();

  constructor( private FournisseurService: FournisseurServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  confirmerEtSupprimerFournisseur(): void {
    console.log('Tentative de suppression de fournisseur avec ID :', { idFournisseur: this.FournisseurDto.id });
    if (this.FournisseurDto.id) {
      this.FournisseurService.deleteFournisseur(this.FournisseurDto.id).subscribe(
        res => {
          this.suppressionResult.emit('success');
        },
        (error) => {
          // Gérer les erreurs plus explicitement
          if (error.status === 404) {
            console.error('Fournisseur non trouvé');
            this.suppressionResult.emit('Fournisseur non trouvé');
          } else {
            console.error('Erreur lors de la suppression de fournisseur', error);
            this.suppressionResult.emit('Erreur lors de la suppression');
          }
        }
      );
    }
  }
  

    
    modifierFournisseur(): void {
      this.router.navigate(['/dashbord/nouveau-fournisseur', { idFournisseur: this.FournisseurDto.id }]);
    } 
    AfficherDetailsSupplimentaire(): void {
      this.router.navigate(['/dashbord/fournisseurs/details-supplimentaire-fournisseur', { idFournisseur: this.FournisseurDto.id }]);
    }
      

}
