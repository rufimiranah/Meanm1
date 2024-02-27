import { Component } from '@angular/core';
import { AccueilService } from './accueil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  listeRDV : any;
  listeRDVTermine:any;
  statutChangeLib : string="";
  affiche:boolean = false

  constructor(private accueilService:AccueilService){}

  ngOnInit(): void {
    this.getListeRendezVousParEmploye();
    this.getListeRendezVousParEmployeTermine();
  }

  getListeRendezVousParEmploye(){
    if(localStorage.getItem('session')){
      const id_employe = localStorage.getItem('session');
      if(id_employe){
        let employe = JSON.parse(id_employe)
       // console.log(employe._id)
        this.accueilService.listeRDVEmploye(employe._id).subscribe({
          next:(res:any) => {
            if(res.value.length>0){
              this.affiche=true
              this.listeRDV = res.value;
             // console.log(res.value);
            }else{
              //this.listeRDV = res.message;
              this.affiche=false;
            }
          },
          error: (error) => {
              this.affiche=false;
          }
        })
      }
    }
  }

  getListeRendezVousParEmployeTermine(){
    if(localStorage.getItem('session')){
      const id_employe = localStorage.getItem('session');
      if(id_employe){
        let employe = JSON.parse(id_employe)
       // console.log(employe._id)
        this.accueilService.listeRDVEmployeTermine(employe._id).subscribe({
          next:(res:any) => {
            if(res.value.length>0){
              this.affiche=true
              this.listeRDVTermine = res.value;
             // console.log(res.value);
            }else{
              //this.listeRDV = res.message;
              this.affiche=false;
            }
          },
          error: (error) => {
              this.affiche=false;
          }
        })
      }
    }
  }

  changeStatut(id_rendez_vous: any, status : any){
    if(status==="Termine"){
      this.statutChangeLib = "En cours";
      let body = {
        'status': this.statutChangeLib
      }
      this.accueilService.statutChange(id_rendez_vous , body).subscribe({
        next:(res:any) => {
          //console.log(res.message);
          this.getListeRendezVousParEmploye();
        }
      })
    }else if (status==="En cours"){
      this.statutChangeLib = "Termine";
      let body = {
        'status': this.statutChangeLib
      }
      this.accueilService.statutChange(id_rendez_vous , body).subscribe({
        next:(res:any) => {
          //console.log(res.message);
          this.getListeRendezVousParEmploye();
        }
      })
    }
  }

}
