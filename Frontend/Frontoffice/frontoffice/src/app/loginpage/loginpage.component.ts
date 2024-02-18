import { Component } from '@angular/core';
import { CustomerService } from '../services/Customer_service/customer-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  login(form: NgForm): void {
    if (form.valid) {
      const formData = form.value;
      this.customerService.login(formData.email, formData.password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/pageAccueilClient']);
          // Handle successful login, such as redirecting to another page
        },
        error: (error) => {
          console.error('Error during login', error);
          // Handle login error, such as displaying an error message
          this.loginError =
            'Une erreur est survenue lors de la connexion. Veuillez vérifier votre email et votre mot de passe.';
        },
      });
    } else {
      console.error('Invalid form');
      // Handle invalid form submission
      this.loginError =
        'Le formulaire est invalide. Veuillez vérifier votre email et votre mot de passe.';
    }
  }
}
