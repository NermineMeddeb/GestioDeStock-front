/* tslint:disable */
import { Category } from './category';
import { LigneCommandeClient } from './ligne-commande-client';
import { LigneCommandeFournisseur } from './ligne-commande-fournisseur';
import { LigneVente } from './ligne-vente';
import { MvtStk } from './mvt-stk';
export interface Article {
  category?: Category;
  codeArticle?: string;
  dateDeCreation?: number;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  ligneCommandeClients?: Array<LigneCommandeClient>;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseur>;
  ligneVentes?: Array<LigneVente>;
  mvtStk?: Array<MvtStk>;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
