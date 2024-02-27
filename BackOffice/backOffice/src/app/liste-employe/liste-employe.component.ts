//manager 
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListeEmployeService } from './liste-employe.service';

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.css']
})
export class ListeEmployeComponent {
  listeEmploye : any ;

  constructor(private ListeEmployeService:ListeEmployeService){}

  ngOnInit(): void {
    this.getListeEmploye()
  }

  getListeEmploye(){
    this.ListeEmployeService.getListeEmploye().subscribe({
      next:(res:any)=>{
        if(res.value){
          this.listeEmploye = res.value;
        }
      }
    })
  }

  test(){
    console.log("ato");
  }

}
