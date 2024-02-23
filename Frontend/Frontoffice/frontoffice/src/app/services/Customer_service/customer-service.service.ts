import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = 'http://localhost:3000/api/customers';

  constructor(private http: HttpClient) {}

  signUp(customerData: any) {
    return this.http.post(`${this.baseUrl}/signup`, customerData);
  }
  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }
}
