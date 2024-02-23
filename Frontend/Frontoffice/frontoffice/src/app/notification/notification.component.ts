import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  appointmentReminders = [
    {
      date: '2024-02-16 10:00',
      message: 'Vous avez un rendez-vous de massage avec John Doe.',
    },
    {
      date: '2024-02-17 15:30',
      message: 'Vous avez un rendez-vous de manucure avec Alice Smith.',
    },
  ];

  promotions = [
    'Profitez de notre promotion spéciale sur les soins du visage !',
    "Bénéficiez d'une réduction de 20% sur tous les massages ce mois-ci.",
  ];
}
