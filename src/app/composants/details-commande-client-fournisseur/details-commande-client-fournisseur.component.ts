import { Component, Input, OnInit } from '@angular/core';
import { CommandeFournisseurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-details-commande-client-fournisseur',
  templateUrl: './details-commande-client-fournisseur.component.html',
  styleUrls: ['./details-commande-client-fournisseur.component.css']
})
export class DetailsCommandeClientFournisseurComponent implements OnInit {
  @Input() commandefournisseur!: CommandeFournisseurDto;
  commande: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
