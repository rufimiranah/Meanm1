import { Component } from '@angular/core';
import { SousServicesService } from './sous-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sous-services',
  templateUrl: './sous-services.component.html',
  styleUrls: ['./sous-services.component.css']
})

export class SousServicesComponent {
  listeSousServices : any ;

  constructor(private SousServicesService: SousServicesService,private router: Router){}

  ngOnInit(): void {
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
