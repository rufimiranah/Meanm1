import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PrestationService } from '../services/prestation_service/prestation.service';
import {
  Services,
  Sous_Services,
} from '../services/prestation_service/prestation.model';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss'],
})
export class PrestationComponent implements OnInit {
  loading = false;
  prestations: Services[] = [];
  sousPrestations: Sous_Services[] = [];

  images: string[] = [
    './assets/images/image1.png',
    './assets/images/image2.png',
    './assets/images/image3.png',
    './assets/images/image4.png',
  ];
  i: any;
  selectedPrestation!: Services;
  // Assurez-vous que prestations est un tableau

  constructor(
    private prestationService: PrestationService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPrestations();
  }

  getPrestations(): void {
    this.prestationService.getAllPrestations().subscribe((response: any) => {
      this.prestations = response.prestations;
      console.log('Response from API:', response);
    });
  }

  selectPrestation(prestation: Services): void {
    this.selectedPrestation = prestation;
    this.loadSousPrestations(prestation._id);
  }

  loadSousPrestations(id_service: string): void {
    this.prestationService
      .getSousPrestations(id_service)
      .subscribe((response: any) => {
        this.sousPrestations = response; // affecter directement la réponse de l'API à sousPrestations
        this.cd.detectChanges();
        console.log('Response from API:', response);
        console.log('sousPrestations:', this.sousPrestations);
      });
  }
}
