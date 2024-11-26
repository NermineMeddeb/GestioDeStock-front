import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeFournisseurDto, LigneCommandeFournisseurDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-commande-fournisseur',
  templateUrl: './commande-fournisseur.component.html',
  styleUrls: ['./commande-fournisseur.component.css']
})
export class CommandeFournisseurComponent implements OnInit {
  listeCommandes: Array<CommandeFournisseurDto> = [];
  mapLignesCommande = new Map();
  mapPrixTotalCommande = new Map();

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private cmdCltFrsService: ApiService) { }



  ngOnInit(): void {
  
    this.findAllCommandes();
  }
  findAllCommandes(): void {
      this.cmdCltFrsService.findAllCommandesFournisseurs()
      .subscribe(cmd => {
        this.listeCommandes = cmd;
        this.findAllLignesCommande();
      });
    } 
    findAllLignesCommande(): void {
      this.listeCommandes.forEach(cmd => {
       this.findLignesCommande(cmd.id);
      });
    }
    findLignesCommande(idCommande?: number): void {
        this.cmdCltFrsService.getAllLignesCommandeFournisseur(idCommande)
        .subscribe(list => {
          this.mapLignesCommande.set(idCommande, list);
          this.mapPrixTotalCommande.set(idCommande, this.calculerTatalCmd(list));
        });
      }
      calculerTatalCmd(list: Array<LigneCommandeFournisseurDto>): number {
        let total = 0;
        list.forEach(ligne => {
          if (ligne.prixUnitaire && ligne.quantite) {
            total += +ligne.quantite * +ligne.prixUnitaire;
          }
        });
        return Math.floor(total);
      }
    
      calculerTotalCommande(id?: number): number {
        return this.mapPrixTotalCommande.get(id);
      }
     
    //  modifierCommandeClient(idCommande: number): void {
      //  this.router.navigate(['/modifier-commande-client', idCommande]);
      //}
      
  goToNouvelleCommande(): void {
    this.router.navigate(['/dashbord/nouvelle-commande-fournisseur']); // Redirige vers l'URL /nouvelle-commande
  }
}
