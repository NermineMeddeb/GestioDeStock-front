import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToNouveauClient(): void {
    this.router.navigate(['/dashbord/nouveau-client']); // Redirige vers l'URL /nouvelle-commande
  }
}
