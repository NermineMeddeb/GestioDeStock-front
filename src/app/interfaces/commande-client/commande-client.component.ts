import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeClientDto, LigneCommandeClientDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.css']
})
export class CommandeClientComponent implements OnInit {
  listeCommandes: Array<CommandeClientDto> = [];
  mapLignesCommande = new Map();
  mapPrixTotalCommande = new Map();

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private cmdCltFrsService: ApiService) { }



  ngOnInit(): void {
  
    this.findAllCommandes();
  }
  findAllCommandes(): void {
      this.cmdCltFrsService.findAllCommandeClients()
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
        this.cmdCltFrsService.findAllLignesCommandesByCommandeClientId(idCommande)
        .subscribe(list => {
          this.mapLignesCommande.set(idCommande, list);
          this.mapPrixTotalCommande.set(idCommande, this.calculerTatalCmd(list));
        });
      }
      calculerTatalCmd(list: Array<LigneCommandeClientDto>): number {
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
      goToNouvelleCommande(): void {
        this.router.navigate(['/dashbord/nouvelle-commande-client']); // Redirige vers l'URL /nouvelle-commande-client
      }
     modifierCommandeClient(idCommande: number): void {
        this.router.navigate(['/dashbord/nouvelle-commande-client', idCommande]);
      }
      
    }
  
    


