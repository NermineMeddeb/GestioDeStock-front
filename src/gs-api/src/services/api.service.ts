/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';
import { CommandeClientDto } from '../models/commande-client-dto';
import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
import { EntrepriseDto } from '../models/entreprise-dto';
import { FournisseurDto } from '../models/fournisseur-dto';
import { MvtStkDto } from '../models/mvt-stk-dto';
import { CategoryDto } from '../models/category-dto';
import { ClientDto } from '../models/client-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/articles/all';
  static readonly saveArticlePath = '/gestiondestock/v1/articles/create';
  static readonly deleteArticlePath = '/gestiondestock/v1/articles/delete/{idArticle}';
  static readonly findAllArticleByIdCategoryPath = '/gestiondestock/v1/articles/filter/category/{idCategory}';
  static readonly findByCodeArticlePath = '/gestiondestock/v1/articles/filter/{codeArticle}';
  static readonly findHistoriqueCommandeClientForArticlePath = '/gestiondestock/v1/articles/historique/commandeclient/{idArticle}';
  static readonly findHistoriqueCommandeFournisseurForArticlePath = '/gestiondestock/v1/articles/historique/commandefournisseur/{idArticle}';
  static readonly findHistoriqueVentesPath = '/gestiondestock/v1/articles/historique/vente/{idArticle}';
  static readonly findByIdArticlePath = '/gestiondestock/v1/articles/{idArticle}';
  static readonly findAllCommandeClientsPath = '/gestiondestock/v1/commandesclients/all';
  static readonly saveCommandeClientPath = '/gestiondestock/v1/commandesclients/create';
  static readonly deleteArticleFromCommandeClientPath = '/gestiondestock/v1/commandesclients/delete/article/{idCommande}/{idLigneCommande}';
  static readonly deleteCommandeClientPath = '/gestiondestock/v1/commandesclients/delete/{idCommandeClient}';
  static readonly findCommandeClientByCodePath = '/gestiondestock/v1/commandesclients/filter/{codeCommandeClient}';
  static readonly findAllLignesCommandesByCommandeClientIdPath = '/gestiondestock/v1/commandesclients/lignesCommande/{idCommande}';
  static readonly updateArticleInCommandeClientPath = '/gestiondestock/v1/commandesclients/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateClientInCommandeClientPath = '/gestiondestock/v1/commandesclients/update/client/{idCommande}/{idClient}';
  static readonly updateEtatCommandeClientPath = '/gestiondestock/v1/commandesclients/update/etat/{idCommande}/{etatCommande}';
  static readonly updateQuantiteInCommandeClientPath = '/gestiondestock/v1/commandesclients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findCommandeClientByIdPath = '/gestiondestock/v1/commandesclients/{idCommandeClient}';
  static readonly findAllCommandesFournisseursPath = '/gestiondestock/v1/commandesfournisseurs/all';
  static readonly saveCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/create';
  static readonly deleteArticleFromCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/delete/article/{idCommande}/{idLigneCommande}';
  static readonly deleteCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/delete/{idCommandeFournisseur}';
  static readonly findCommandeFournisseurByCodePath = '/gestiondestock/v1/commandesfournisseurs/filter/{codeCommandeFournisseur}';
  static readonly getAllLignesCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/lignesCommande/{idCommande}';
  static readonly updateArticleInCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateEtatCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/update/etat/{idCommande}/{etatCommande}';
  static readonly updateFournisseurInCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/update/fournisseur/{idCommande}/{idFournisseur}';
  static readonly updateQuantiteInCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findCommandeFournisseurByIdPath = '/gestiondestock/v1/commandesfournisseurs/{idCommandeFournisseur}';
  static readonly findAllEntreprisesPath = '/gestiondestock/v1/entreprises/all';
  static readonly saveEntreprisePath = '/gestiondestock/v1/entreprises/create';
  static readonly deleteEntreprisePath = '/gestiondestock/v1/entreprises/delete/{idEntreprise}';
  static readonly findEntrepriseByIdPath = '/gestiondestock/v1/entreprises/{idEntreprise}';
  static readonly findAll_1Path = '/gestiondestock/v1/fournisseurs/all';
  static readonly savePath = '/gestiondestock/v1/fournisseurs/create';
  static readonly deletePath = '/gestiondestock/v1/fournisseurs/delete/{idFournisseur}';
  static readonly findByIdPath = '/gestiondestock/v1/fournisseurs/{idFournisseur}';
  static readonly correctionStockNegPath = '/gestiondestock/v1/mvtstk/correctionneg';
  static readonly correctionStockPosPath = '/gestiondestock/v1/mvtstk/correctionpos';
  static readonly entreeStockPath = '/gestiondestock/v1/mvtstk/entree';
  static readonly mvtStkArticlePath = '/gestiondestock/v1/mvtstk/filter/article/{idArticle}';
  static readonly sortieStockPath = '/gestiondestock/v1/mvtstk/sortie';
  static readonly findAll_categoriesPath = 'gestiondestock/v1/categories/all';
  static readonly savecategoriesPath = 'gestiondestock/v1/categories/create';
  static readonly delete_catPath = 'gestiondestock/v1/categories/delete/{idCategory}';
  static readonly findByCodePath = 'gestiondestock/v1/categories/filter/{codeCategory}';
  static readonly findById_1Path = 'gestiondestock/v1/categories/{idCategory}';
  static readonly findAll_clientPath = 'gestiondestock/v1/clients/all';
  static readonly save_2Path = 'gestiondestock/v1/clients/gestiondestock/v1/clients/create';
  static readonly delete_2Path = 'gestiondestock/v1/clients/gestiondestock/v1/clients/delete/{idClient}';
  static readonly findById_2Path = 'gestiondestock/v1/clients/gestiondestock/v1/clients/{idClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<ArticleDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveArticleResponse(ArticleDto:any): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    //@nermine
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = ArticleDto;
    console.log('Corps de la requête :', __body); // Log des données envoyées

//

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/articles/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  saveArticle(ArticleDto:any): __Observable<ArticleDto> {
    console.log("hii")
    return this.saveArticleResponse(ArticleDto).pipe(
      __map(_r => _r.body as ArticleDto)
    );console.log("ahla")
  }
  deleteArticleResponse(idArticle:any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/articles/delete/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  deleteArticle(idArticle:any): __Observable<null> {
    return this.deleteArticleResponse(idArticle).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findAllArticleByIdCategoryResponse(idCategory:any): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/filter/category/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllArticleByIdCategory(idCategory:any): __Observable<Array<ArticleDto>> {
    return this.findAllArticleByIdCategoryResponse(idCategory).pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * @return successful operation
   */
  findByCodeArticleResponse(codeArticle:any): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/filter/${encodeURIComponent(String(codeArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByCodeArticle(codeArticle:any): __Observable<ArticleDto> {
    return this.findByCodeArticleResponse(codeArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueCommandeClientForArticleResponse(idArticle:any): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/commandeclient/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findHistoriqueCommandeClientForArticle(idArticle:any): __Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriqueCommandeClientForArticleResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueCommandeFournisseurForArticleResponse(idArticle:any): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/commandefournisseur/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findHistoriqueCommandeFournisseurForArticle(idArticle:any): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseurForArticleResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueVentesResponse(idArticle:any): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/vente/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findHistoriqueVentes(idArticle:any): __Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVentesResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * @return successful operation
   */
  findByIdArticleResponse(idArticle:any): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByIdArticle(idArticle:any): __Observable<ArticleDto> {
    return this.findByIdArticleResponse(idArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllCommandeClientsResponse(): __Observable<__StrictHttpResponse<Array<CommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllCommandeClients(): __Observable<Array<CommandeClientDto>> {
    return this.findAllCommandeClientsResponse().pipe(
      __map(_r => _r.body as Array<CommandeClientDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveCommandeClientResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/commandesclients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  saveCommandeClient(): __Observable<CommandeClientDto> {
    return this.saveCommandeClientResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  deleteArticleFromCommandeClientResponse(idCommande:any,idLigneCommande:any): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesclients/delete/article/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  deleteArticleFromCommandeClient(idCommande:any,idLigneCommande:any): __Observable<CommandeClientDto> {
    return this.deleteArticleFromCommandeClientResponse(idCommande,idLigneCommande).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }
  deleteCommandeClientResponse(idCommandeClient:any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesclients/delete/${encodeURIComponent(String(idCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  deleteCommandeClient(idCommandeClient:any): __Observable<null> {
    return this.deleteCommandeClientResponse(idCommandeClient).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findCommandeClientByCodeResponse(codeCommandeClient:any): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/filter/${encodeURIComponent(String(codeCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findCommandeClientByCode(codeCommandeClient:any): __Observable<CommandeClientDto> {
    return this.findCommandeClientByCodeResponse(codeCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllLignesCommandesByCommandeClientIdResponse(idCommande:any): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/lignesCommande/${encodeURIComponent(String(idCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllLignesCommandesByCommandeClientId(idCommande:any): __Observable<Array<LigneCommandeClientDto>> {
    return this.findAllLignesCommandesByCommandeClientIdResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @return successful operation
   */
  updateArticleInCommandeClientResponse(idCommande:any,idLigneCommande:any,idArticle:any): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/article/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateArticleInCommandeClient(idCommande:any,idLigneCommande:any,idArticle:any): __Observable<CommandeClientDto> {
    return this.updateArticleInCommandeClientResponse(idCommande,idLigneCommande,idArticle).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  updateClientInCommandeClientResponse(idCommande: any, idClient: any): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/client/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateClientInCommandeClient(idCommande: any, idClient: any): __Observable<CommandeClientDto> {
    return this.updateClientInCommandeClientResponse(idCommande,idClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  updateEtatCommandeClientResponse(idCommande:any,etatCommande:any): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/etat/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(etatCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateEtatCommandeClient(idCommande:any,etatCommande:any): __Observable<CommandeClientDto> {
    return this.updateEtatCommandeClientResponse(idCommande,etatCommande).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  updateQuantiteInCommandeClientResponse(idCommande:any,idLigneCommande:any,quantite:any): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/quantite/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}/${encodeURIComponent(String(quantite))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateQuantiteInCommandeClient(idCommande:any,idLigneCommande:any,quantite:any): __Observable<CommandeClientDto> {
    return this.updateQuantiteInCommandeClientResponse(idCommande,idLigneCommande,quantite).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findCommandeClientByIdResponse(idCommandeClient:any): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/${encodeURIComponent(String(idCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findCommandeClientById(idCommandeClient:any): __Observable<CommandeClientDto> {
    return this.findCommandeClientByIdResponse(idCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllCommandesFournisseursResponse(): __Observable<__StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllCommandesFournisseurs(): __Observable<Array<CommandeFournisseurDto>> {
    return this.findAllCommandesFournisseursResponse().pipe(
      __map(_r => _r.body as Array<CommandeFournisseurDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveCommandeFournisseurResponse(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  saveCommandeFournisseur(): __Observable<CommandeFournisseurDto> {
    return this.saveCommandeFournisseurResponse().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  deleteArticleFromCommandeFournisseurResponse(idCommande:any,idLigneCommande:any): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/delete/article/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  deleteArticleFromCommandeFournisseur(idCommande:any,idLigneCommande:any): __Observable<CommandeFournisseurDto> {
    return this.deleteArticleFromCommandeFournisseurResponse(idCommande,idLigneCommande).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }
  deleteCommandeFournisseurResponse(idCommandeFournisseur:any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/delete/${encodeURIComponent(String(idCommandeFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  deleteCommandeFournisseur(idCommandeFournisseur:any): __Observable<null> {
    return this.deleteCommandeFournisseurResponse(idCommandeFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findCommandeFournisseurByCodeResponse(codeCommandeFournisseur:any): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/filter/${encodeURIComponent(String(codeCommandeFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findCommandeFournisseurByCode(codeCommandeFournisseur:any): __Observable<CommandeFournisseurDto> {
    return this.findCommandeFournisseurByCodeResponse(codeCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  getAllLignesCommandeFournisseurResponse(idCommande:any): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/lignesCommande/${encodeURIComponent(String(idCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllLignesCommandeFournisseur(idCommande:any): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.getAllLignesCommandeFournisseurResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @return successful operation
   */
  updateArticleInCommandeFournisseurResponse(idCommande:any,idLigneCommande:any,idArticle:any): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/article/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateArticleInCommandeFournisseur(idCommande:any,idLigneCommande:any,idArticle:any): __Observable<CommandeFournisseurDto> {
    return this.updateArticleInCommandeFournisseurResponse(idCommande,idLigneCommande,idArticle).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  updateEtatCommandeFournisseurResponse(idCommande:any,etatCommande:any): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/etat/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(etatCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateEtatCommandeFournisseur(idCommande:any,etatCommande:any): __Observable<CommandeFournisseurDto> {
    return this.updateEtatCommandeFournisseurResponse(idCommande,etatCommande).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  updateFournisseurInCommandeFournisseurResponse(idCommande:any,idFournisseur:any): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/fournisseur/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateFournisseurInCommandeFournisseur(idCommande:any,idFournisseur:any): __Observable<CommandeFournisseurDto> {
    return this.updateFournisseurInCommandeFournisseurResponse(idCommande,idFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  updateQuantiteInCommandeFournisseurResponse(idCommande:any,idLigneCommande:any,quantite:any): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/quantite/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}/${encodeURIComponent(String(quantite))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateQuantiteInCommandeFournisseur(idCommande:any,idLigneCommande:any,quantite:any): __Observable<CommandeFournisseurDto> {
    return this.updateQuantiteInCommandeFournisseurResponse(idCommande,idLigneCommande,quantite).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findCommandeFournisseurByIdResponse(idCommandeFournisseur:any): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/${encodeURIComponent(String(idCommandeFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findCommandeFournisseurById(idCommandeFournisseur:any): __Observable<CommandeFournisseurDto> {
    return this.findCommandeFournisseurByIdResponse(idCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllEntreprisesResponse(): __Observable<__StrictHttpResponse<Array<EntrepriseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprises/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllEntreprises(): __Observable<Array<EntrepriseDto>> {
    return this.findAllEntreprisesResponse().pipe(
      __map(_r => _r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveEntrepriseResponse(): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/entreprises/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  saveEntreprise(): __Observable<EntrepriseDto> {
    return this.saveEntrepriseResponse().pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }
  deleteEntrepriseResponse(idEntreprise:any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/entreprises/delete/${encodeURIComponent(String(idEntreprise))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  deleteEntreprise(idEntreprise:any): __Observable<null> {
    return this.deleteEntrepriseResponse(idEntreprise).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findEntrepriseByIdResponse(idEntreprise:any): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprises/${encodeURIComponent(String(idEntreprise))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findEntrepriseById(idEntreprise:any): __Observable<EntrepriseDto> {
    return this.findEntrepriseByIdResponse(idEntreprise).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_1Response(): __Observable<__StrictHttpResponse<Array<FournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_1(): __Observable<Array<FournisseurDto>> {
    return this.findAll_1Response().pipe(
      __map(_r => _r.body as Array<FournisseurDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveResponse(): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save(): __Observable<FournisseurDto> {
    return this.saveResponse().pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }
  deleteResponse(idFournisseur:any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/delete/${encodeURIComponent(String(idFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  delete(idFournisseur:any): __Observable<null> {
    return this.deleteResponse(idFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findByIdResponse(idFournisseur:any): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/${encodeURIComponent(String(idFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById(idFournisseur:any): __Observable<FournisseurDto> {
    return this.findByIdResponse(idFournisseur).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  correctionStockNegResponse(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtstk/correctionneg`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStkDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  correctionStockNeg(): __Observable<MvtStkDto> {
    return this.correctionStockNegResponse().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * @return successful operation
   */
  correctionStockPosResponse(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtstk/correctionpos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStkDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  correctionStockPos(): __Observable<MvtStkDto> {
    return this.correctionStockPosResponse().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * @return successful operation
   */
  entreeStockResponse(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtstk/entree`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStkDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  entreeStock(): __Observable<MvtStkDto> {
    return this.entreeStockResponse().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * @return successful operation
   */
  mvtStkArticleResponse(idArticle:any): __Observable<__StrictHttpResponse<Array<MvtStkDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/mvtstk/filter/article/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MvtStkDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  mvtStkArticle(idArticle:any): __Observable<Array<MvtStkDto>> {
    return this.mvtStkArticleResponse(idArticle).pipe(
      __map(_r => _r.body as Array<MvtStkDto>)
    );
  }

  /**
   * @return successful operation
   */
  sortieStockResponse(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtstk/sortie`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStkDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  sortieStock(): __Observable<MvtStkDto> {
    return this.sortieStockResponse().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_categoriesResponse(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    console.log("heni fel find all")
    console.log(`URL de la requête: ${this.rootUrl}gestiondestock/v1/categories/all`)

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + '/gestiondestock/v1/categories/all',

      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_categories(): __Observable<Array<CategoryDto>> {
    return this.findAll_categoriesResponse().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  savecategoriesResponse(body?: CategoryDto): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  savecategories(body?: CategoryDto): __Observable<CategoryDto> {
    return this.savecategoriesResponse(body).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * @param idCategory undefined
   */
  delete_catResponse(idCategory: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    console.log("heni fel delite")

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/categories/delete/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idCategory undefined
   */
  delete_cat(idCategory: number): __Observable<null> {
    return this.delete_catResponse(idCategory).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findByCodeResponse(codeCategory:any): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/categories/filter/${encodeURIComponent(String(codeCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByCode(codeCategory:any): __Observable<CategoryDto> {
    return this.findByCodeResponse(codeCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * @param idCategory undefined
   * @return successful operation
   */
  findById_1Response(idCategory: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/categories/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * @param idCategory undefined
   * @return successful operation
   */
  findById_1(idCategory: number): __Observable<CategoryDto> {
    return this.findById_1Response(idCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_clientResponse(): __Observable<__StrictHttpResponse<Array<ClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/clients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_client(): __Observable<Array<ClientDto>> {
    return this.findAll_clientResponse().pipe(
      __map(_r => _r.body as Array<ClientDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_2Response(body?: ClientDto): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestiondestock/v1/clients/gestiondestock/v1/clients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_2(body?: ClientDto): __Observable<ClientDto> {
    return this.save_2Response(body).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * @param idClient undefined
   */
  delete_2Response(idClient: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestiondestock/v1/clients/gestiondestock/v1/clients/delete/${encodeURIComponent(String(idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idClient undefined
   */
  delete_2(idClient: number): __Observable<null> {
    return this.delete_2Response(idClient).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findById_2Response(idClient:any): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestiondestock/v1/clients/gestiondestock/v1/clients/${encodeURIComponent(String(idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_2(idClient:any): __Observable<ClientDto> {
    return this.findById_2Response(idClient).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }
}

module ApiService {
}

export { ApiService }
