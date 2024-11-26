import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
import { UtilisateurDto } from 'src/gs-api/src/models/utilisateur-dto';

@Component({
  selector: 'app-details-utilisateur',
  templateUrl: './details-utilisateur.component.html',
  styleUrls: ['./details-utilisateur.component.css']
})
export class DetailsUtilisateurComponent implements OnInit {
  // Input pour recevoir les données utilisateur du parent
  @Input() UtilisateurDto!: UtilisateurDto;

  // Output pour notifier le parent des actions (comme la suppression réussie)
  @Output() suppressionResult = new EventEmitter<string>();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // Vérifiez si les données de l'utilisateur sont bien reçues
    if (!this.UtilisateurDto) {
      console.error('Aucune donnée utilisateur reçue.');
    }
  }

  /**
   * Fonction pour modifier l'utilisateur
   */
  modifier(): void {
    if (!this.UtilisateurDto || !this.UtilisateurDto.id) {
      console.error("Impossible de modifier : aucun utilisateur sélectionné");
      return;
    }
    console.log("Redirection vers le formulaire de modification avec ID :", this.UtilisateurDto.id);
    this.router.navigate(['dashbord/nouveau-utilisateur', this.UtilisateurDto.id]);
  }

  /**
   * Fonction pour confirmer et supprimer un utilisateur
   */
  confirmerEtSupprimerUtilisateur(): void {
    if (!this.UtilisateurDto || !this.UtilisateurDto.id) {
      console.error('Aucun utilisateur fourni pour suppression');
      return;
    }

    const confirmation = confirm('Voulez-vous vraiment supprimer cet utilisateur ?');
    if (!confirmation) {
      return;
    }

    console.log('Tentative de suppression de l\'utilisateur avec ID :', this.UtilisateurDto.id);

    this.userService.deleteUtilisateur(this.UtilisateurDto.id).subscribe(
      (res: any) => {
        console.log('Utilisateur supprimé avec succès');
        this.suppressionResult.emit('success');
      },
      (error: any) => {
        if (error.status === 404) {
          console.error('Utilisateur non trouvé');
        } else {
          console.error('Erreur lors de la suppression de l\'utilisateur', error);
          this.suppressionResult.emit('Erreur lors de la suppression');
        }
      }
    );
  }

  /**
   * Fonction pour afficher les détails supplémentaires d'un utilisateur
   */

  DetailsSupplimentairesUtilisateur(): void {
    this.router.navigate(['/dashbord/utilisateur/details-supplimentaire-utilisateur', { idUtilisateur: this.UtilisateurDto.id }]);
  }
}
