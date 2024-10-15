/* tslint:disable */
import { Article } from './article';
import { Ventes } from './ventes';
export interface LigneVente {
  article?: Article;
  dateDeCreation?: number;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
  vente?: Ventes;
}
