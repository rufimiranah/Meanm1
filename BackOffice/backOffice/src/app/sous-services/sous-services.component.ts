import { Component } from '@angular/core';
import { SousServicesService } from './sous-services.service';
import { Router } from '@angular/router';
//manager
@Component({
  selector: 'app-sous-services',
  templateUrl: './sous-services.component.html',
  styleUrls: ['./sous-services.component.css']
})

export class SousServicesComponent {
  listeSousServices : any ;
  session:any;

  constructor(private SousServicesService: SousServicesService,private router: Router){}

  ngOnInit(): void {
    const sessionRole = localStorage.getItem('session')
      if(sessionRole){
        this.session =JSON.parse(sessionRole);
      }
    this.getListeSousServices();
  }

  getListeSousServices(){
    this.SousServicesService.listeSousServices().subscribe({
      next:(res:any)=>{
        if(res.length>0){
          this.listeSousServices = res;
        }
      }
    })
  }

}
