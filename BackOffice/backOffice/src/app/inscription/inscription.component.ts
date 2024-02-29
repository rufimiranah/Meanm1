import { Component } from '@angular/core';
import { InscriptionService } from './inscription.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  name : string='';
  password : string='';
  mail : string='';
  description:string='';
  id_role : any;
  debutHeure: number=0;
  finHeure: number=0;

  roleEmploye:any;

  constructor( private InscriptionService:InscriptionService, private route: ActivatedRoute , private router : Router){}

  inscriptionEmploye(){
    const role = this.id_role;
    if(role==="Manager"){
      this.roleEmploye = "65d80f45399e76ad23c88926";
    }
    if(role==="Employe"){
      this.roleEmploye="65d80ee3399e76ad23c88924";
    }
    let body ={
      "name":this.name,
      "password":this.password,
      "mail":this.mail,
      "description":this.description,
      "debutHeure":this.debutHeure,
      "finHeure":this.finHeure,
      "id_role":this.roleEmploye
    }
    this.InscriptionService.inscription(body).subscribe({
      next:(res:any) => {
        console.log("ato");
          this.router.navigate(['/confirmation']);
      }
    })

  }
}
