import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/Services/Entreprise/entreprise.service';
import { UserService } from 'src/app/Services/user/user.service';
import { AdresseDto, EntrepriseDto } from 'src/gs-api/src/models';
import { AuthenticationRequest } from 'src/gs-api/src/models/authentication-request';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  entrepriseDto: EntrepriseDto = {};
  adresse: AdresseDto = {};
  errorsMsg: Array<string> = [];
  successMessage: string = ''; // Nouvelle variable pour le message de succès

  constructor(
    private entrepriseService: EntrepriseService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  inscrire(): void {
    this.entrepriseDto.adresse = this.adresse;
    this.entrepriseService.sinscrire(this.entrepriseDto)
      .subscribe((response: EntrepriseDto) => {
        // Définir le message de succès
        this.successMessage = 'Inscription réussie. Vous allez être redirigé.';
        this.errorsMsg = []; // Effacer les erreurs précédentes
        // Redirection après un court délai
        setTimeout(() => this.connectEntreprise(), 3000);
      }, (error: any) => {
        this.errorsMsg = error.error.errors;
        this.successMessage = ''; // Effacer le message de succès en cas d'erreur
      });
  }

  connectEntreprise(): void {
    const authenticationRequest: AuthenticationRequest = {
      login: this.entrepriseDto.email,
      password: 'som3R@nd0mP@$$word'
    };
    this.userService.login(authenticationRequest)
      .subscribe((response: any) => {
        this.userService.setAccessToken(response);
        this.getUserByEmail(authenticationRequest.login);
        localStorage.setItem('origin', 'inscription');
        this.router.navigate(['/dashbord']);
      });
  }

  getUserByEmail(email?: string): void {
    this.userService.getUserByEmail(email)
      .subscribe((user: any) => {
        this.userService.setConnectedUser(user);
      });
  }
}
