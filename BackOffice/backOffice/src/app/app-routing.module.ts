import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TemplateComponent } from './template/template/template.component';

const routes: Routes = [
  { path: '', 
  component:TemplateComponent,
  children: [
    {
     path: 'accueil', component:AccueilComponent
    }
  ]

  },
  { path: 'login', component:LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
