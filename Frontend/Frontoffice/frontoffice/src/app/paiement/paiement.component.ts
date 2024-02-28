import { Component } from '@angular/core';
import { CartserviceService } from '../services/Cart_service/cartservice.service';
import { EmployeService } from '../services/Employe_service/employe.service';
import { AuthService } from '../services/Auth_service/Auth.service';
import { Employe_model } from '../services/Employe_service/employe.model';
import { Sous_Services } from '../services/prestation_service/prestation.model';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss'],
})
export class PaiementComponent {
  SousPrestations: Sous_Services[] = []; // Les prestations sélectionnées
  employe!: Employe_model; // L'employé sélectionné
  date!: Date; // La date sélectionnée
  horaire!: string; // L'horaire sélectionné
  totalDuree!: number; // Total durée des prestations
  totalPrix!: number; // Total prix des prestations
  id_utilisateur!: string; // L'ID de l'utilisateur connecté
  totalPrice!: number;
  userId!: string;
  rdvData: any;
  prestationDetails: any;
  cardCode!: number;

  constructor(
    private employeService: EmployeService,
    private cartService: CartserviceService
  ) {}

  ngOnInit() {
    const rdvData = this.cartService.getRdvData();
    console.log('Données de rendez-vous:', rdvData);
    this.totalPrice = this.cartService.getTotalPrice();
    console.log('Prix total:', this.totalPrice);
    this.userId = this.cartService.getUserId();
    this.totalPrice = this.cartService.getTotalPrice();
    this.rdvData.id_detail.forEach((id: string) => {
      this.cartService.getAllSousPrestations(id).subscribe(
        (response) => {
          console.log('Détails de la prestation:', response);
          this.prestationDetails = response;
          // Stockez les détails de la prestation pour les afficher plus tard
        },
        (error) => {
          console.error(
            'Erreur lors de la récupération des détails de la prestation:',
            error
          );
        }
      );
    });
  }
  submitPayment() {
    const paymentData = {
      id_rdv: this.rdvData.id_rdv,
      id_utilisateur: this.userId,
      montant: this.totalPrice,
      cardcode: this.cardCode,
    };

    // Envoyez paymentData à votre backend...
  }
}
