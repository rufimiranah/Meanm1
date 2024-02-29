import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificationServiceService {

  constructor(private http: HttpClient) { }

  listeServicesId(idServices:any){
    const URL_SERVICE_ID ="http://localhost:3000/services/listeServicesById/"+idServices;
    return this.http.get(URL_SERVICE_ID);
  }

  modifyService(idService:any , body:any){
    const URL_MODIFY_SERVICE = "http://localhost:3000/services/modifyService/"+idService;
    return this.http.put(URL_MODIFY_SERVICE,body);
  }
}
