import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
import { UtilisateurDto } from 'src/gs-api/src/models/utilisateur-dto';
import SavePhotoParams = PhotosService.SavePhotoParams;
import { PhotosService } from 'src/gs-api/src/services/photoService';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  connectedUser: UtilisateurDto = {}; // Déclarez l'utilisateur connecté
  file: File | null = null;
  origin = '';
  errorMsg: Array<string> = [];
  imgUrl: string | ArrayBuffer = 'assets/product.png';

  constructor(private userService: UserService, private router: Router, private photoService: PhotosService) { }

  ngOnInit(): void {
    // Récupérer l'utilisateur connecté
    this.connectedUser = this.userService.getConnectedUser();
    console.log('Utilisateur connecté:', this.connectedUser);
  }

  modifierMotDePasse(): void {
    this.router.navigate(['/dashbord/changer-le-pwd']);
  }

  modifierProfil(): void {
    this.router.navigate(['/dashbord/modifier-profil']);
  }

  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = () => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }

  savePhoto(idObject?: number, titre?: string): void {
    if (idObject && titre && this.file) {
      const params: SavePhotoParams = {
        id: idObject,
        file: this.file,
        title: titre,
        context: this.origin
      };
      this.photoService.savePhoto(params).subscribe(() => {
        this.cancelClick();
      });
    } else {
      this.cancelClick();
    }
  }
  
  cancelClick(): void {
    // Logic for cancelling the photo update
  }
}///lezem tzid el enregistrer et retour et enregistrer bech isejel el taswira fel base w tben fel liste des utulisateur
