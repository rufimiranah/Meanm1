import { Component } from '@angular/core';
import { OffresService } from './offres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent {
  listeOffre : any;
  affiche:boolean = false;

  constructor(private OffresService:OffresService){}

  ngOnInit(): void {
    this.getListeOffre();
  }

  getListeOffre(){
        this.OffresService.listeOffre().subscribe({
          next:(res:any) => {
            if(res){
              console.log(res);
              this.affiche=true;
              this.listeOffre = res.value;
          }else{
            this.affiche=false;
          }
        }
      })
  }

}
