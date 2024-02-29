import { Component } from '@angular/core';
import { ListeServicesService } from './liste-services.service';
import { Router } from '@angular/router';
//manager
@Component({
  selector: 'app-liste-services',
  templateUrl: './liste-services.component.html',
  styleUrls: ['./liste-services.component.css']
})
export class ListeServicesComponent {
  listeServices : any ;
  session:any;

  constructor(private ListeServicesService : ListeServicesService,private router: Router){}

  ngOnInit(): void {
    const sessionRole= localStorage.getItem('session');
    if(sessionRole){
      this.session =JSON.parse(sessionRole);
    }
    this.getListeServices();
  }

  getListeServices(){
    this.ListeServicesService.listeServices().subscribe({
      next:(res:any) => {
        if(res.length>0){
          this.listeServices = res;
        }
      }
    })
  }

}
