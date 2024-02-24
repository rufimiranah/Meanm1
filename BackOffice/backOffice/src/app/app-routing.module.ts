import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: '', component:AppComponent},
  { path: 'login', component:LoginComponent },
  { path: 'accueil', component:AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
