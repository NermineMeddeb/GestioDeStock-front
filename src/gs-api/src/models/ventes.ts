/* tslint:disable */
import { LigneVente } from './ligne-vente';
export interface Ventes {
  code?: string;
  commentaire?: string;
  dateDeCreation?: number;
  dateVente?: number;
  id?: number;
  idEntreprise?: number;
  ligneVentes?: Array<LigneVente>;
}
