import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ModificationSousServicesService } from './modification-sous-services.service';

@Component({
  selector: 'app-modification-sous-services',
  templateUrl: './modification-sous-services.component.html',
  styleUrls: ['./modification-sous-services.component.css']
})
export class ModificationSousServicesComponent {
  listeSousServices : any;
  id:any;
  resultat : any;
  libelle_detail : string="";
  delai_detail : number = 0;
  prix_detail : number = 0;
  comission : number = 0;
  description_detail: string="";

  constructor(private ModificationSousServicesService:ModificationSousServicesService,private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = this.route.snapshot.paramMap.get('idSousService');
     this.getListeSouServiceId(this.id);
    })
  }

  getListeSouServiceId(idSousService:any){
    this.ModificationSousServicesService.listeSousServiceId(idSousService).subscribe({
      next:(res:any) => {
        console.log(res);
          this.listeSousServices = res;
      }
    })
  }

  modificationSousServices(idSousService:any){
    let body = {
      "libelle_detail" : this.libelle_detail,
      "description_detail" : this.description_detail,
      "delai_detail":this.delai_detail,
      "prix_detail":this.prix_detail,
      "comission":this.comission
    }
      this.ModificationSousServicesService.modifySousService(idSousService,body).subscribe({
        next:(res:any) => {
          console.log(res);
          this.resultat = res ;
          this.router.navigate(['/liste-sous-services']);
        }
      })
  }

}
