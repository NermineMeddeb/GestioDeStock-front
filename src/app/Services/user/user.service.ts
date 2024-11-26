import { Injectable } from '@angular/core';
import { AuthenticationService } from '../../../gs-api/src/services/AuthenticationService';
import { UtilisateursService } from '../../../gs-api/src/services/UtilisateurService';

import { AuthenticationRequest } from '../../../gs-api/src/models/authentication-request';
import { Observable, of } from 'rxjs';
import { AuthenticationResponse } from '../../../gs-api/src/models/authentication-response';
import { Router } from '@angular/router';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';
import { ChangerMotDePasseUtilisateurDto } from 'src/gs-api/src/models/ChangerMotDePasseUtilisateurDto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private authenticationService: AuthenticationService,
    private utilisateurService: UtilisateursService,
    private router: Router
  ) {}
  

  enregistrerUtilisateur(
    utilisateurDto: UtilisateurDto
  ): Observable<UtilisateurDto> {
    const connectedUser = this.getConnectedUser();

    // Vérifier si l'utilisateur connecté a une entreprise avec un ID valide
    if (connectedUser.entreprise && connectedUser.entreprise.id) {
      utilisateurDto.entreprise = { id: connectedUser.entreprise.id };
    } else {
      console.error('Utilisateur connecté ou entreprise non défini.');
      // Vous pouvez retourner une erreur ou gérer différemment cette situation
      return of(utilisateurDto); // ou une autre logique adaptée
    }

    return this.utilisateurService.save(utilisateurDto);
  }

  findAllUtilisateur(): Observable<UtilisateurDto[]> {
    return this.utilisateurService.findAll();
  }

  deleteUtilisateur(idUtilisateur: number): Observable<any> {
    if (idUtilisateur) {
      return this.utilisateurService.delete(idUtilisateur);
    }
    return of();
  }

  findUtilisateurById(id: number): Observable<UtilisateurDto> {
    if (id) {
      return this.utilisateurService.findById(id);
    }
    return of();
  }

  login(
    authenticationRequest: AuthenticationRequest
  ): Observable<AuthenticationResponse> {
    return this.authenticationService.authenticate(authenticationRequest);
  }

  getUserByEmail(email?: string): Observable<UtilisateurDto> {
    if (email) {
      return this.utilisateurService.findByEmail(email);
    }
    return of();
  }

  setAccessToken(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem('accessToken', JSON.stringify(authenticationResponse));
  }

  setConnectedUser(utilisateur: UtilisateurDto): void {
    localStorage.setItem('connectedUser', JSON.stringify(utilisateur));
  }

  getConnectedUser(): UtilisateurDto {
    const userJson = localStorage.getItem('connectedUser');
    if (userJson) {
      return JSON.parse(userJson) as UtilisateurDto;
    }
    return {}; // Renvoie un objet vide si aucun utilisateur n'est connecté
  }

  changerMotDePasse(
    changerMotDePasseDto: ChangerMotDePasseUtilisateurDto
  ): Observable<ChangerMotDePasseUtilisateurDto> {
    return this.utilisateurService.changerMotDePasse(changerMotDePasseDto);
  }

  isUserLoggedAndAccessTokenValid(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // TODO : Ajouter la validation de l'accessToken si nécessaire
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
