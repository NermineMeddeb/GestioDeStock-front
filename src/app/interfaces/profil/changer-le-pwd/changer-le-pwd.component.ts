import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
import { ChangerMotDePasseUtilisateurDto } from 'src/gs-api/src/models/ChangerMotDePasseUtilisateurDto';

@Component({
  selector: 'app-changer-le-pwd',
  templateUrl: './changer-le-pwd.component.html',
  styleUrls: ['./changer-le-pwd.component.css']
})
export class ChangerMotDePasseComponent implements OnInit {

  changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  ancienMotDePasse: string = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // Vérification de l'origine de la navigation pour définir un mot de passe par défaut
    if (localStorage.getItem('origin') && localStorage.getItem('origin') === 'inscription') {
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';  // Utiliser un mot de passe par défaut
      localStorage.removeItem('origin');  // Suppression de l'élément 'origin' après utilisation
    }
  }

  // Fonction pour annuler et revenir à la page de profil
  cancel(): void {
    this.router.navigate(['profil']);
  }

  // Fonction pour changer le mot de passe de l'utilisateur
  changerMotDePasseUtilisateur(): void {
    this.changerMotDePasseDto.id = this.userService.getConnectedUser().id;  // Assigner l'ID de l'utilisateur connecté
    this.userService.changerMotDePasse(this.changerMotDePasseDto)  // Appeler le service pour changer le mot de passe
      .subscribe(data => {
        this.router.navigate(['profil']);  // Rediriger vers la page de profil après la mise à jour
      });
  }
}
