import { Component } from '@angular/core';
import { ListeRdvEmployeService } from './liste-rdv-employe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-rdv-employe',
  templateUrl: './liste-rdv-employe.component.html',
  styleUrls: ['./liste-rdv-employe.component.css']
})
export class ListeRdvEmployeComponent {
  listeRDV : any;
  id : any ;

  constructor(private ListeRdvEmployeService:ListeRdvEmployeService,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = this.route.snapshot.paramMap.get('idEmploye');
    this.getListeRendezVousParEmploye(this.id);
    })
  }

  getListeRendezVousParEmploye(id:any){ 
        this.ListeRdvEmployeService.listeRDVEmploye(id).subscribe({
          next:(res:any) => {
            if(res.value.length>0){
              this.listeRDV = res.value;
            }
          }
        })
  }
}