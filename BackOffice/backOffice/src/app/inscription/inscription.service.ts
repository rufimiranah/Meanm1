import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) { }

  inscription(body:any){
      const URL_INSCRIPTION = "http://localhost:3000/user/inscription";
      return this.http.post(URL_INSCRIPTION,body);
  }
}
