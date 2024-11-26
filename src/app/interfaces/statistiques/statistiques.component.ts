import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  // Variables pour les statistiques
  articlesCount?: number;
  commandesClientsCount?: number;
  commandesFournisseursCount?: number;
  stockPositif?: number;
  stockNegatif?: number;
  singleData: any[] = [];
  multiData: any[] = [];

  loading = true;  // Indicateur de chargement
  errorMessage?: string;  // Message d'erreur

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loadArticlesCount();
    this.loadCommandesClientsCount();
    this.loadCommandesFournisseursCount();
    this.loadStockStats();
  }

  loadArticlesCount() {
    this.apiService.findAll().subscribe(
      (response: any) => {
        this.articlesCount = response.length;  // Assurez-vous que la réponse est un tableau
        this.updateChartData();
        this.loading = false;
      },
      (error) => this.handleError(error)
    );
  }

  loadCommandesClientsCount() {
    this.apiService.findAllCommandeClients().subscribe(
      (response: any) => {
        this.commandesClientsCount = response.length;
        this.updateChartData();
      },
      (error) => this.handleError(error)
    );
  }

  loadCommandesFournisseursCount() {
    this.apiService.findAllCommandesFournisseurs().subscribe(
      (response: any) => {
        this.commandesFournisseursCount = response.length;
        this.updateChartData();
      },
      (error) => this.handleError(error)
    );
  }

  loadStockStats() {
    this.apiService.correctionStockPos().subscribe(
      (response: any) => {
        this.stockPositif = response.length;
      },
      (error) => this.handleError(error)
    );

    this.apiService.correctionStockNeg().subscribe(
      (response: any) => {
        this.stockNegatif = response.length;
      },
      (error) => this.handleError(error)
    );
  }

  updateChartData() {
    if (this.articlesCount && this.commandesClientsCount && this.commandesFournisseursCount) {
      this.singleData = [
        { name: 'Articles', value: this.articlesCount },
        { name: 'Commandes Clients', value: this.commandesClientsCount },
        { name: 'Commandes Fournisseurs', value: this.commandesFournisseursCount }
      ];
    }
  }

  handleError(error: any) {
    this.loading = false;
    this.errorMessage = 'Une erreur est survenue lors du chargement des données.';
    console.error(error);
  }
}
