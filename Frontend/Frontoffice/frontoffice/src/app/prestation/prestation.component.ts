import { Component } from '@angular/core';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss'],
})
export class PrestationComponent {
  services = [
    {
      id: 1,
      name: 'Manucure et pédicure',
      icon: '/assets/images/Manucure.png',
      description: 'Description de la manucure et pédicure',
    },
    {
      id: 2,
      name: 'Soin visage',
      icon: '/assets/images/Visage.png',
      description: 'Description du soin visage',
    },
    {
      id: 3,
      name: 'Massage',
      icon: '/assets/images/Massage.png',
      description: 'Description du massage',
    },
    {
      id: 4,
      name: 'Epilation',
      icon: '/assets/images/Epilation.png',
      description: "Description de l'épilation",
    },
  ];
}
