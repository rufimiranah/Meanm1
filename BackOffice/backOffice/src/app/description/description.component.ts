import { Component } from '@angular/core';
import { DescriptionService } from './description.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  descriptionProfil: string = ''; 
  debutHoraire: number = 0; 
  finHoraire: number = 0;
  resultat : any;

  constructor(private DescriptionService: DescriptionService,private router: Router){}

  addDescription(){
    console.log("ato");
    let body = {
      "description" : this.descriptionProfil,
      "debutHoraire" : this.debutHoraire,
      "finHoraire" : this.finHoraire
    }
    const employe = localStorage.getItem('session');
    if(employe){
      let idEmploye = JSON.parse(employe);
      this.DescriptionService.ajoutDescription(idEmploye._id,body).subscribe({
        next:(res:any) => {
          console.log("ajouter");
          this.resultat = res ;
        }
      })
    }
  }


}
