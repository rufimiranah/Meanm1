import { Component } from '@angular/core';
import { ListeOffreService } from './liste-offre.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent {
  listeOffre : any ;
  libelle_offre : string='';
  description_offre : string='';
  date_offre: Date = new Date() ;
  prix_offre : Number = 0;

  constructor(private ListeOffreService:ListeOffreService,private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {

  }

  addOffre(){
    let body = {
      "libelle_offre" : this.libelle_offre,
      "description_offre" : this.description_offre,
      "date_offre":this.date_offre,
      "prix_offre":this.prix_offre
    }
    this.ListeOffreService.ajoutOffre(body).subscribe({
      next:(res:any) => {
        if(res.value.length>0){
          this.listeOffre = res.value;
          this.router.navigate(['/offres']);
        }
      }
    })
  }

}
