import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-commande-client',
  templateUrl: './nouvelle-commande-client.component.html',
  styleUrls: ['./nouvelle-commande-client.component.css']
})
export class NouvelleCommandeClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['/dashbord/commande-client']); // Redirection vers la liste des fournisseurs
  }
  }

