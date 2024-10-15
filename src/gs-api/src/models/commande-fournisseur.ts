/* tslint:disable */
import { Fournisseur } from './fournisseur';
import { LigneCommandeFournisseur } from './ligne-commande-fournisseur';
export interface CommandeFournisseur {
  code?: string;
  dateCommande?: number;
  dateDeCreation?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  fournisseur?: Fournisseur;
  id?: number;
  idEntreprise?: number;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseur>;
}
