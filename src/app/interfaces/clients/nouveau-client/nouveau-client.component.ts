import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdresseDto, ClientDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';
import { PhotosService } from 'src/gs-api/src/services/photoService';
import SavePhotoParams = PhotosService.SavePhotoParams;

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.css']
})
export class NouveauClientComponent implements OnInit {

  origin = '';
  clientdto: ClientDto = {};
  adresseDto: AdresseDto = {};
  errorMsg: Array<string> = [];
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/product.png';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cltService: ApiService,
    private photoService: PhotosService // À décommenter si nécessaire
  ) { }

  ngOnInit(): void {
    const idClient = this.activatedRoute.snapshot.params['idClient'];
    if (idClient) {
      this.cltService.findByIdClient(idClient).subscribe(client => {
        this.clientdto = client;
        // Charger l'image du client s'il y en a une
        this.imgUrl = client.photo ? `assets/${client.photo}` : 'assets/produit.png';
        
        // Assurez-vous que l'adresse est bien initialisée
        this.adresseDto = client.adresse || {};
      });
    } else {
      // Initialisation pour un nouveau client
      this.clientdto = {};
      this.adresseDto = {};
    }
  }
  
  enregistrer(): void {
    this.cltService.SaveClient(this.clientdto).subscribe(
      response => {
        // Appel de la fonction pour sauvegarder la photo (si nécessaire)
        this.savePhoto(response.id, response.nom);
        this.router.navigate(['/dashbord/clients']);
      },
      error => {
        // Vérification plus robuste de la structure de l'objet d'erreur
        if (error && error.error && error.error.errors) {
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
    this.router.navigate(['/dashbord/clients']); // Redirection vers la liste des clients
  }

  confirmerEnregistrement(): void {
    this.enregistrer();
  }
}
