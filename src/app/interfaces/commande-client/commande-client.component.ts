import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.css']
})
export class CommandeClientComponent implements OnInit {
  constructor(private router: Router) { }



  ngOnInit(): void {
  }
  goToNouvelleCommande(): void {
    this.router.navigate(['/dashbord/nouvelle-commande-client']); // Redirige vers l'URL /nouvelle-commande
  }

}
