import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';  // Importation de l'interface Menu
import { Router } from '@angular/router';  // Importation du service Router pour la navigation

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Propriétés du menu définies avec un tableau d'objets Menu
  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fas fa-chart-line',
      url: '',
        sousMenu: [
         {
                   id: '11',
                   titre: 'Vue d\'ensemble',
                   icon: 'fas fa-chart-pie',
                    url: 'dashbord'
        },
        {
                    id: '12',
                    titre: 'Statistiques',
                     icon: 'fas fa-chart-bar',
                    url: 'statistiques'
        }
      ]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: 'fas fa-boxes',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Mouvements du stock',
          icon: 'fab fa-stack-overflow',
          url: 'mouvement-de-stock'
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fas fa-users',
          url: 'clients'
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fas fa-shopping-basket',
          url: 'commande-client'
        }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'fas fa-users',
          url: 'fournisseurs'
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'fas fa-truck',
          url: 'commande-fournisseur'
        }
      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          icon: 'fas fa-tools',
          url: 'categories'
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fas fa-users-cog',
          url: 'utilisateur'
        }
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined;  // Menu précédemment sélectionné pour la gestion de l'état actif

  constructor(
    private router: Router  // Injection du service Router pour la navigation
  ) { }

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    // Vous pouvez ajouter du code ici si nécessaire lors de l'initialisation
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
  
    if (menu.url) {
      if (menu.url) {
        this.router.navigate(['/dashbord', menu.url]);  // Ajout de 'dashbord' comme chemin de base pour chaque menu
      }
          }
  }
  
  
}
