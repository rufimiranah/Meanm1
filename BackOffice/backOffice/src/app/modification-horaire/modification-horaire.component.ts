import { Component } from '@angular/core';
import { ModificationHoraireService } from './modification-horaire.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-modification-horaire',
  templateUrl: './modification-horaire.component.html',
  styleUrls: ['./modification-horaire.component.css']
})
export class ModificationHoraireComponent {
  horaireEmploye : any;
  id:any;
  debutHoraire: number=0;
  finHoraire: number =0;
  resultatUpdate : any;

  constructor(private ModificationHoraireService: ModificationHoraireService , private route: ActivatedRoute , private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = this.route.snapshot.paramMap.get('idEmploye');
      this.showHoraire(this.id);
    })
  }

  showHoraire(idEmploye:any){
    this.ModificationHoraireService.listeEmployeById(idEmploye).subscribe({
      next:(res:any) => {
          this.horaireEmploye = res.value;
      }
    })
  }

  modifyHoraire(idEmploye: any){
    let body = {
      "debutHeure" : this.debutHoraire,
      "finHeure" : this.finHoraire
    }
      this.ModificationHoraireService.modificationHoraire(idEmploye,body).subscribe({
        next:(res:any) => {
          this.resultatUpdate = res;
          console.log(this.resultatUpdate);
          this.router.navigate(['/liste-employe']);
        }
      })
  }

}
