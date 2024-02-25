import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
 
  constructor(private http: HttpClient) { }

  listeRDVEmploye(idEmploye:any){
    const URL_LIST_RDV = "http://localhost:3000/employe/rendezVousEmploye/"+idEmploye;
    return this.http.get(URL_LIST_RDV);
  }

  statutChange(id_rendez_vous : any, status : any){
    const URL_STATUT = "http://localhost:3000/employe/rendezvousStatus/"+id_rendez_vous;
    return this.http.put(URL_STATUT,status);
  }
}
