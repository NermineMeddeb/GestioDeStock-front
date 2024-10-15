/* tslint:disable */
import { Article } from './article';
export interface MvtStk {
  article?: Article;
  dateDeCreation?: number;
  dateMvt?: number;
  id?: number;
  idEntreprise?: number;
  quantite?: number;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
