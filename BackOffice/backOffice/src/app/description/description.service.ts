import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(private http: HttpClient) { }

  ajoutDescription(idEmploye:any, body:any){
    const URL_DESCRIPTION = "http://localhost:3000/employe/ajoutDescription/"+idEmploye;
    return this.http.post(URL_DESCRIPTION,body);
  }

  listeEmployeById(idEmploye:any){
    const URL_LIST_EMPLOYE_ID= "http://localhost:3000/employe/listeemployeId/"+idEmploye;
    return this.http.get(URL_LIST_EMPLOYE_ID);
  }
}
