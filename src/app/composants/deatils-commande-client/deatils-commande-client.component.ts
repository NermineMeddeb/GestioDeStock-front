import { Component, Input, OnInit } from '@angular/core';
import { CommandeClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-deatils-commande-client',
  templateUrl: './deatils-commande-client.component.html',
  styleUrls: ['./deatils-commande-client.component.css']
})
export class DeatilsCommandeClientComponent implements OnInit {
  @Input() commandeClient!: CommandeClientDto;
  commande: any = {};

  constructor() { }

  ngOnInit(): void {
    console.log('CommandeClientDto:', this.commandeClient);  }
  
}
