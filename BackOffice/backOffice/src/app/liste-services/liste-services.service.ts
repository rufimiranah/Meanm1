import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeServicesService {

  constructor(private http:HttpClient) { }

  listeServices(){
    const URL_LISTE_SERVICES = "http://localhost:3000/services/listeServices";
    return this.http.get(URL_LISTE_SERVICES);
  }
}
