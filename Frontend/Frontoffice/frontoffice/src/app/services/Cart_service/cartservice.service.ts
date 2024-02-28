import { Injectable } from '@angular/core';
import { Sous_Services } from '../prestation_service/prestation.model';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../Auth_service/Auth.service';
import { CustomerService } from '../Customer_service/customer-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  private cart: Sous_Services[] = [];
  cartKey = 'cart';
  userId!: string;
  private email!: string;
  private password!: string;

  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
    private customerService: CustomerService,
    private http: HttpClient
  ) {
    const storedCart = this.cookieService.get(this.cartKey);
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }
  storeLoginCredentials(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  loginAndStoreUserId() {
    if (this.email && this.password) {
      this.customerService
        .login(this.email, this.password)
        .subscribe((response) => {
          this.userId = response.userId;
          // Utilisez userId pour le paiement
        });
    } else {
      console.error(
        'Email and password must be set before calling loginAndStoreUserId'
      );
    }
  }
  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  addToCart(sousPrestation: Sous_Services): void {
    this.cart.push(sousPrestation);
    this.saveCart();
  }
  getCart() {
    return this.cart;
  }
  removeFirstFromCart(): void {
    if (this.cart.length > 0) {
      this.cart.shift();
      this.saveCart();
    }
  }

  private saveCart(): void {
    this.cookieService.set(this.cartKey, JSON.stringify(this.cart));
  }
  getTotalPrice(): number {
    let total = 0;
    for (let sousPrestation of this.cart) {
      total += sousPrestation.prix_detail;
    }
    return total;
  }
  getUserId() {
    return this.userId;
  }
  private paymentData: any;

  setPaymentData(data: any) {
    this.paymentData = data;
  }

  getPaymentData() {
    return this.paymentData;
  }

  private baseUrl = 'http://localhost:3000/api/cart';
  createRdv(rdvData: any) {
    return this.http.post(`${this.baseUrl}/createrdv`, rdvData);
  }

  private rdvData: any;

  setRdvData(data: any) {
    this.rdvData = data;
  }

  getRdvData() {
    return this.rdvData;
  }
  getAllSousPrestations(id_service: string): Observable<Sous_Services[]> {
    return this.http.get<Sous_Services[]>(
      `http://localhost:3000/api/prestations/sousprestations`
    );
  }
}
