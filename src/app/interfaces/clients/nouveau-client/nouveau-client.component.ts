import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.css']
})
export class NouveauClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['/dashbord/clients']); // Redirection vers la liste des fournisseurs
  }
}
