import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AbsoluteSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mail : String = '';
  password : String ='';

  constructor(private LoginService: LoginService,private router: Router) { }

  login () {
    let body = {
      "mail":this.mail,
      "password": this.password
    }
    this.LoginService.checkLogin(body).subscribe({
      next: (res:any) => {
        if(res.message === "OK"){
          //console.log(res)
          localStorage.setItem('session', JSON.stringify(res.value));
          const session = localStorage.getItem('session');
          if(session){
            const role = JSON.parse(session);
            if(role.id_role.nom_role==='Manager'){
              this.router.navigate(['/liste-services']);
            }
            if(role.id_role.nom_role==='Employé'){
              this.router.navigate(['/accueil']);
            }
          }
        }else{
          this.router.navigate(['/login']);
        }
      }
    })
  }
}
