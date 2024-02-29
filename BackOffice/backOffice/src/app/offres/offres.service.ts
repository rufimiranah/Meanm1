import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  constructor(private http:HttpClient) { }

  listeOffre(){
    const URL_OFFRE = "http://localhost:3000/offre/listeOffres";
    return this.http.get(URL_OFFRE);
  }
}
