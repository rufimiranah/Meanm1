import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 session : any;

  ngOnInit(): void {
    this.getSession();
  }

  getSession(){
    const listeSession = localStorage.getItem('session');
    if(listeSession){
      this.session= JSON.parse(listeSession);
    }
  }

}
