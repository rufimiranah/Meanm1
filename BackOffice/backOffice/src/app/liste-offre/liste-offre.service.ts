import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeOffreService {

  constructor(private http:HttpClient) { }

  ajoutOffre(body:any){
    const URL_LISTE_OFFRE = "http://localhost:3000/offre/ajoutOffre";
    return this.http.post(URL_LISTE_OFFRE,body);
  }
}
