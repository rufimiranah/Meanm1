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
  private mail!: string;
  private mdp!: string;
  selectedEmploye: any;

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
  storeLoginCredentials(mail: string, mdp: string) {
    this.mail = mail;
    this.mdp = mdp;
  }

  loginAndStoreUserId() {
    if (this.mail && this.mdp) {
      this.customerService.login(this.mail, this.mdp).subscribe((response) => {
        this.userId = response.userId;
        // Utilisez userId pour le paiement
      });
    } else {
      console.error(
        'mail and mdp must be set before calling loginAndStoreUserId'
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
    // Vérifier s'il y a une seule prestation dans le panier
    if (this.cart.length === 1) {
      return this.cart[0].prix_detail; // Retourner le prix de la seule prestation
    } else {
      // Calculer le prix total en additionnant les prix de toutes les prestations
      let total = 0;
      for (let sousPrestation of this.cart) {
        total += sousPrestation.prix_detail;
      }
      return total;
    }
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

  private baseUrl = 'http://localhost:3000/cart';
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
      `http://localhost:3000/prestations/sousprestations`
    );
  }
  // Récupérer tous les rendez-vous
  getRdvs(): Observable<any> {
    return this.http.get(`http://localhost:3000/cart/rendezvous`);
  }

  async updateHorairesEmploye(employeId: string) {
    if (!this.selectedEmploye) {
      console.error('selectedEmploye is undefined');
      return;
    }

    // Récupérer tous les rendez-vous de l'employé spécifié
    const rdvs = await this.getRdvs().toPromise();
    const rdvsEmploye = rdvs.filter(
      (rdv: { id_employe: string }) => rdv.id_employe === employeId
    );

    let horaires = [];
    let heure = this.selectedEmploye.debutHeure;
    while (heure < this.selectedEmploye.finHeure) {
      let rdvExist = rdvsEmploye.find(
        (rdv: { dateRdv: string | number | Date }) =>
          new Date(rdv.dateRdv).getHours() === heure
      );

      if (!rdvExist) {
        // Si l'horaire n'est pas pris, l'ajouter à la liste des horaires disponibles
        horaires.push(this.formatHeure(heure));
      }
      heure += 0.25; // Ajoute 15 minutes
    }

    console.log('Horaires disponibles:', horaires);
  }

  formatHeure(heure: any): any {
    throw new Error('Method not implemented.');
  }
}
