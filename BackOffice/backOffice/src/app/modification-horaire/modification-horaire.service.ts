import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificationHoraireService {

  constructor(private http:HttpClient) { }

  listeEmployeById(idEmploye:any){
    const URL_LIST_EMPLOYE_ID= "http://localhost:3000/employe/listeemployeId/"+idEmploye;
    return this.http.get(URL_LIST_EMPLOYE_ID);
  }

  modificationHoraire(idEmploye:any, body:any){
    const URL_MODIFY_HORAIRE="http://localhost:3000/employe/modifyHoraire/"+idEmploye;
    return this.http.post(URL_MODIFY_HORAIRE,body);
  }
}
