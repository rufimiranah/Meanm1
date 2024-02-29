import { Component } from '@angular/core';
import { DescriptionService } from './description.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//employe
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
  listeDescription:any;

  constructor(private DescriptionService: DescriptionService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.descriptionEmploye();
  }

  descriptionEmploye(){
    const employe = localStorage.getItem('session');
    if(employe){
      let idEmploye = JSON.parse(employe);
      this.DescriptionService.listeEmployeById(idEmploye._id).subscribe({
        next:(res:any) => {
            this.listeDescription = res.value;
            this.descriptionProfil = this.listeDescription.description;
            this.debutHoraire = this.listeDescription.debutHeure;
            this.finHoraire = this.listeDescription.finHeure;
        }
      })
    }
  }

  addDescription(){
    console.log("ato");
    let body = {
      "description" : this.descriptionProfil,
      "debutHeure" : this.debutHoraire,
      "finHeure" : this.finHoraire
    }
    const employe = localStorage.getItem('session');
    if(employe){
      let idEmploye = JSON.parse(employe);
      this.DescriptionService.ajoutDescription(idEmploye._id,body).subscribe({
        next:(res:any) => {
          this.resultat = res ;
          this.router.navigate(['/accueil']);
        }
      })
    }
  }


}
