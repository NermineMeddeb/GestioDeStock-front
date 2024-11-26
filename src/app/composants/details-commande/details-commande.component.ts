import { Component, Input, OnInit } from '@angular/core';
import { LigneCommandeClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css']
})
export class DetailsCommandeComponent implements OnInit {
  @Input()
  ligneCommande: LigneCommandeClientDto = {};
  constructor() { }

  ngOnInit(): void {
  }

}
