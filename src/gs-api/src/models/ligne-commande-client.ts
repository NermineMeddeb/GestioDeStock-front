/* tslint:disable */
import { Article } from './article';
import { CommandeClient } from './commande-client';
export interface LigneCommandeClient {
  article?: Article;
  commandeClient?: CommandeClient;
  dateDeCreation?: number;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
