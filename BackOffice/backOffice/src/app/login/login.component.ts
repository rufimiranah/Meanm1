import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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
    console.log(this.mail)
    this.LoginService.checkLogin(body).subscribe({
      next: (res:any) => {
        if(res.message === "OK"){
          this.router.navigate(['/accueil']);
        }else{
          this.router.navigate(['/login']);
        }
      }
    })
  }
}
