import { Component } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss'],
})
export class HistoriqueComponent {
  appointmentHistory = [
    {
      date: '2024-02-16 10:00',
      service: 'Massage',
      employee: 'John Doe',
      rating: 0, // Initial rating set to 0
    },
    {
      date: '2024-02-17 15:30',
      service: 'Manucure',
      employee: 'Alice Smith',
      rating: 0, // Initial rating set to 0
    },
    {
      date: '2024-02-18 11:45',
      service: 'Coiffure',
      employee: 'Bob Johnson',
      rating: 0, // Initial rating set to 0
    },
  ];

  hoveredRow: number | null = null;

  trackHoveredRow(index: number): void {
    this.hoveredRow = index;
  }

  resetHoveredRow(): void {
    this.hoveredRow = null;
  }

  // Fonction pour générer les étoiles en fonction du rating
  getStars(rating: number): number[] {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      // Remplir les étoiles en fonction du rating
      if (i < rating) {
        stars.push(i);
      } else {
        stars.push(-1); // Utilisez une valeur négative pour les étoiles vides
      }
    }
    return stars;
  }

  // Fonction pour définir le rating d'un rendez-vous
  setRating(appointmentIndex: number, rating: number): void {
    this.appointmentHistory[appointmentIndex].rating = rating;
  }
}
