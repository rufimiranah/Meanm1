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
          this.router.navigate(['/accueil']);
        }else{
          this.router.navigate(['/login']);
        }
      }
    })
  }
}
