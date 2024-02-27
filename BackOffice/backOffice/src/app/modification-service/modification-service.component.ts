import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModificationServiceService } from './modification-service.service';

@Component({
  selector: 'app-modification-service',
  templateUrl: './modification-service.component.html',
  styleUrls: ['./modification-service.component.css']
})
export class ModificationServiceComponent {
  listeServices : any;
  id : any ;
  libelle_service : string='';
  description_service : string ='';
  resultat : any;

  constructor(private ModificationServiceService:ModificationServiceService,private route: ActivatedRoute , private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = this.route.snapshot.paramMap.get('idService');
      this.getListeService(this.id);
    })
  }

  getListeService(idService:any){
    this.ModificationServiceService.listeServicesId(idService).subscribe({
      next:(res:any) => {
          this.listeServices = res;
      }
    })
  }

  modificationService (idService:any){
    let body = {
      "libelle_service" : this.libelle_service,
      "description_service" : this.description_service
    }
      this.ModificationServiceService.modifyService(idService,body).subscribe({
        next:(res:any) => {
          this.resultat = res ;
          this.router.navigate(['/liste-services']);
        }
      })
    }
  }

