import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './interfaces/login/login.component';
import { SignInComponent } from './interfaces/sign-in/sign-in.component';
import { DashbordComponent } from './interfaces/dashbord/dashbord.component';
import { StatistiquesComponent } from './interfaces/statistiques/statistiques.component';
import { ArticlesComponent } from './interfaces/articles/articles.component';
import { NouveauArticleComponent } from './interfaces/articles/nouveau-article/nouveau-article.component';
import { MouvementDeStockComponent } from './interfaces/mouvement-de-stock/mouvement-de-stock.component';
import { ClientsComponent } from './interfaces/clients/clients.component';
import { NouveauClientComponent } from './interfaces/clients/nouveau-client/nouveau-client.component';

import { FournisseursComponent } from './interfaces/fournisseurs/fournisseurs.component';
import { NouveauFournisseurComponent } from './interfaces/fournisseurs/nouveau-fournisseur/nouveau-fournisseur.component';
import { CommandeFournisseurComponent } from './interfaces/commande-fournisseur/commande-fournisseur.component';
import { CommandeClientComponent } from './interfaces/commande-client/commande-client.component';

import { NouvelleCommandeClientComponent } from './interfaces/commande-client/nouvelle-commande-client/nouvelle-commande-client.component';
import { NouvelleCommandeFournisseurComponent } from './interfaces/commande-fournisseur/nouvelle-commande-fournisseur/nouvelle-commande-fournisseur.component';

import { CategoriesComponent } from './interfaces/categories/categories.component';
import { NouvelleCategorieComponent } from './interfaces/categories/nouvelle-categorie/nouvelle-categorie.component';
import { UtilisateurComponent } from './interfaces/utilisateur/utilisateur.component';

import { ProfilComponent } from './interfaces/profil/profil.component';
import { ChangerMotDePasseComponent } from './interfaces/profil/changer-le-pwd/changer-le-pwd.component';
import { DetailsSupplimentaireClientComponent } from './interfaces/clients/details-supplimentaire-client/details-supplimentaire-client.component';
import { DetailsSupplimentaireFournisseurComponent } from './interfaces/fournisseurs/details-supplimentaire-fournisseur/details-supplimentaire-fournisseur.component';
import { NouveauUtilisateurComponent } from './interfaces/utilisateur/nouveau-utilisateur/nouveau-utilisateur.component';
import { DetailsSupplimentaireUtilisateurComponent } from './interfaces/utilisateur/details-supplimentaire-utilisateur/details-supplimentaire-utilisateur.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashbord/articles', pathMatch: 'full' }, // Redirection par défaut vers la page de dashbord
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'dashbord',
    component: DashbordComponent,
    children: [
      { path: 'statistiques', component: StatistiquesComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'nouveau-article', component: NouveauArticleComponent }, ///////////
      { path: 'nouveau-article/:id', component: NouveauArticleComponent },

      { path: 'mouvement-de-stock', component: MouvementDeStockComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'nouveau-client', component: NouveauClientComponent },

      { path: 'fournisseurs', component: FournisseursComponent },

      { path: 'commande-fournisseur', component: CommandeFournisseurComponent },
      { path: 'commande-client', component: CommandeClientComponent },

      { path: 'nouveau-fournisseur', component: NouveauFournisseurComponent },
      {
        path: 'nouvelle-commande-client',
        component: NouvelleCommandeClientComponent,
      },
      {
        path: 'nouvelle-commande-client/:idCommande',
        component: NouvelleCommandeClientComponent,
      },

      {
        path: 'nouvelle-commande-fournisseur',
        component: NouvelleCommandeFournisseurComponent,
      },

      { path: 'categories', component: CategoriesComponent },
      { path: 'nouvelle-categorie', component: NouvelleCategorieComponent },
      { path: 'utilisateur', component: UtilisateurComponent },
      { path: 'nouveau-utilisateur', component: NouveauUtilisateurComponent }, //
      {
        path: 'nouveau-utilisateur/:id',
        component: NouveauUtilisateurComponent,
      },

      { path: 'profil', component: ProfilComponent },
      { path: 'changer-le-pwd', component: ChangerMotDePasseComponent },
      {
        path: 'clients/DetailsSupplimentaireClient',
        component: DetailsSupplimentaireClientComponent,
      },
      {
        path: 'fournisseurs/details-supplimentaire-fournisseur',
        component: DetailsSupplimentaireFournisseurComponent,
      },
      {
        path: 'utilisateur/details-supplimentaire-utilisateur',
        component: DetailsSupplimentaireUtilisateurComponent,
      },
      { path: '', redirectTo: 'profil', pathMatch: 'full' }, // Redirection par défaut
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
