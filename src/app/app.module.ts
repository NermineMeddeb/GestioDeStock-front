import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './interfaces/login/login.component';
import { SignInComponent } from './interfaces/sign-in/sign-in.component';
import { DashbordComponent } from './interfaces/dashbord/dashbord.component';
import { StatistiquesComponent } from './interfaces/statistiques/statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { ArticlesComponent } from './interfaces/articles/articles.component';
import { DetailsArticleComponent } from './composants/details-article/details-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { ActionButtonComponent } from './composants/action-button/action-button.component';
import { NouveauArticleComponent } from './interfaces/articles/nouveau-article/nouveau-article.component';
import { MouvementDeStockComponent } from './interfaces/mouvement-de-stock/mouvement-de-stock.component';
import { DetailsMouvementDeStockComponent } from './composants/details-mouvement-de-stock/details-mouvement-de-stock.component';
import { DetailsClientsComponent } from './composants/details-clients/details-clients.component';
import { ClientsComponent } from './interfaces/clients/clients.component';
import { FournisseursComponent } from './interfaces/fournisseurs/fournisseurs.component';
import { DetailsFournisseursComponent } from './composants/details-fournisseurs/details-fournisseurs.component';
import { NouveauFournisseurComponent } from './interfaces/fournisseurs/nouveau-fournisseur/nouveau-fournisseur.component';
import { DetailsCommandeClientFournisseurComponent } from './composants/details-commande-client-fournisseur/details-commande-client-fournisseur.component';
import { CommandeClientComponent } from './interfaces/commande-client/commande-client.component';
import { DetailsCommandeComponent } from './composants/details-commande/details-commande.component';
import { DetailsMouvementDeStockArticleComponent } from './composants/details-mouvement-de-stock-article/details-mouvement-de-stock-article.component';
import { CategoriesComponent } from './interfaces/categories/categories.component';
import { NouvelleCategorieComponent } from './interfaces/categories/nouvelle-categorie/nouvelle-categorie.component';
import { DetailsUtilisateurComponent } from './composants/details-utilisateur/details-utilisateur.component';
import { ProfilComponent } from './interfaces/profil/profil.component';
import { ChangerLePwdComponent } from './composants/changer-le-pwd/changer-le-pwd.component';
import { CommandeFournisseurComponent } from './interfaces/commande-fournisseur/commande-fournisseur.component';
import { NouvelleCommandeClientComponent } from './interfaces/commande-client/nouvelle-commande-client/nouvelle-commande-client.component';
import { NouvelleCommandeFournisseurComponent } from './interfaces/commande-fournisseur/nouvelle-commande-fournisseur/nouvelle-commande-fournisseur.component';
import { NouveauClientComponent } from './interfaces/clients/nouveau-client/nouveau-client.component';
import { VueDEnsembleComponent } from './interfaces/vue-d-ensemble/vue-d-ensemble.component';
import { UtilisateurComponent } from './interfaces/utilisateur/utilisateur.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeatilsCommandeClientComponent } from './composants/deatils-commande-client/deatils-commande-client.component';
import { LoaderComponent } from './composants/loader/loader.component';
import { LoaderService } from './composants/loader/service/loader.service';
import { DetailsSupplimentaireClientComponent } from './interfaces/clients/details-supplimentaire-client/details-supplimentaire-client.component';
import { DetailsSupplimentaireFournisseurComponent } from './interfaces/fournisseurs/details-supplimentaire-fournisseur/details-supplimentaire-fournisseur.component';
import { NouveauUtilisateurComponent } from './interfaces/utilisateur/nouveau-utilisateur/nouveau-utilisateur.component';
import { DetailsSupplimentaireUtilisateurComponent } from './interfaces/utilisateur/details-supplimentaire-utilisateur/details-supplimentaire-utilisateur.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashbordComponent,
    StatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    ArticlesComponent,
    DetailsArticleComponent,
    PaginationComponent,
    ActionButtonComponent,
    NouveauArticleComponent,
    MouvementDeStockComponent,
    DetailsMouvementDeStockComponent,
    DetailsClientsComponent,
    ClientsComponent,
    FournisseursComponent,
    DetailsFournisseursComponent,
    
    NouveauFournisseurComponent,
    DetailsCommandeClientFournisseurComponent,
    CommandeClientComponent,
    DetailsCommandeComponent,
    NouvelleCommandeClientComponent,
    DetailsMouvementDeStockArticleComponent,
    CategoriesComponent,
   NouvelleCategorieComponent,
   DetailsUtilisateurComponent,
   ProfilComponent,
   ChangerLePwdComponent,
   CommandeFournisseurComponent,
   CommandeClientComponent,
   NouvelleCommandeClientComponent,
   NouvelleCommandeFournisseurComponent,
   NouveauClientComponent,
   VueDEnsembleComponent,
   
    UtilisateurComponent,
    DeatilsCommandeClientComponent,
    LoaderComponent,
    DetailsSupplimentaireClientComponent,
    DetailsSupplimentaireFournisseurComponent,
    NouveauUtilisateurComponent,
    DetailsSupplimentaireUtilisateurComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,

  ],
  providers: [    LoaderService,
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
