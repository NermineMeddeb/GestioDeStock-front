import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdresseDto, FournisseurDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';
import { PhotosService } from 'src/gs-api/src/services/photoService';
import SavePhotoParams = PhotosService.SavePhotoParams;

@Component({
  selector: 'app-nouveau-fournisseur',
  templateUrl: './nouveau-fournisseur.component.html',
  styleUrls: ['./nouveau-fournisseur.component.css']
})
export class NouveauFournisseurComponent implements OnInit {

  origin = 'fournisseur'; // Définit le contexte pour différencier client/fournisseur
  fournisseurDto: FournisseurDto = {};
  adresseDto: AdresseDto = {};
  errorMsg: Array<string> = [];
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/product.png';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService, // Service pour les appels API
    private photoService: PhotosService // Service pour gérer les photos
  ) {}

  ngOnInit(): void {
    const idFournisseur = this.activatedRoute.snapshot.params['idFournisseur'];
    if (idFournisseur) {
      // Si un ID est présent, charger les données du fournisseur
      this.apiService.findByIdFournisseur(idFournisseur).subscribe(
        fournisseur => {
          this.fournisseurDto = fournisseur;
          this.imgUrl = fournisseur.photo ? `assets/${fournisseur.photo}` : 'assets/produit.png';
          this.adresseDto = fournisseur.adresse || {};
        },
        error => {
          this.errorMsg = ['Impossible de charger les informations du fournisseur.'];
        }
      );
    } else {
      // Initialisation pour un nouveau fournisseur
      this.fournisseurDto = {};
      this.adresseDto = {};
    }
  }

  enregistrer(): void {
    this.apiService.save(this.fournisseurDto).subscribe(
      (response) => {
        this.savePhoto(response.id, response.nom);
        this.router.navigate(['/dashbord/fournisseurs']);
      },
      (error) => {
        if (error?.error?.errors) {
          this.errorMsg = error.error.errors;
        } else {
          this.errorMsg = ['Une erreur est survenue lors de la sauvegarde.'];
        }
      }
    );
    
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
      // Appel du service pour sauvegarder la photo
      this.photoService.savePhoto(params).subscribe(() => {
        this.cancelClick();
      });
    } else {
      this.cancelClick();
    }
  }

  cancelClick(): void {
    this.router.navigate(['/dashbord/fournisseurs']); // Redirection vers la liste des fournisseurs
  }

  confirmerEnregistrement(): void {
    this.enregistrer();
  }
}
