import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PrestationService } from '../services/prestation_service/prestation.service';
import {
  Services,
  Sous_Services,
} from '../services/prestation_service/prestation.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prestation-visite',
  templateUrl: './prestation-visite.component.html',
  styleUrls: ['./prestation-visite.component.scss'],
})
export class PrestationVisiteComponent implements OnInit {
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
  selectedSousPrestations: Sous_Services[] = [];
  constructor(
    private prestationService: PrestationService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPrestations();
  }
  prendreRendezVous() {
    this.router.navigate(['/login']);
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
        this.sousPrestations = response.map((item: any) => ({
          ...item,
          inCart: false,
        }));
        this.sousPrestations = response; // affecter directement la réponse de l'API à sousPrestations
        this.cd.detectChanges();
        console.log('Response from API:', response);
        console.log('sousPrestations:', this.sousPrestations);
      });
  }
  convertMinutesToHours(minutes: number): string {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    if (hours === 0) {
      return remainingMinutes + ' min';
    } else if (remainingMinutes === 0) {
      return hours + ' h ';
    } else {
      return hours + ' h  ' + remainingMinutes + ' min ';
    }
  }
}
