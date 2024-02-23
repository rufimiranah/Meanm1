// prestation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Services } from './prestation.model';
import { Sous_Services } from './prestation.model';
@Injectable({
  providedIn: 'root',
})
export class PrestationService {
  private apiUrl = 'http://localhost:3000/api/prestations/prestations';
  constructor(private http: HttpClient) {}

  getAllPrestations(): Observable<Services[]> {
    return this.http.get<Services[]>(this.apiUrl);
  }
  getSousPrestations(id_service: string): Observable<Sous_Services[]> {
    return this.http.get<Sous_Services[]>(
      `http://localhost:3000/api/prestations/sousprestations/${id_service}`
    );
  }
}
