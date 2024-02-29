import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TemplateComponent } from './template/template/template.component';
import { DescriptionComponent } from './description/description.component';
import { ListeServicesComponent } from './liste-services/liste-services.component';
import { SousServicesComponent } from './sous-services/sous-services.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { ListeRdvEmployeComponent } from './liste-rdv-employe/liste-rdv-employe.component';
import { ModificationServiceComponent } from './modification-service/modification-service.component';
import { ModificationSousServicesComponent } from './modification-sous-services/modification-sous-services.component';
import { ModificationHoraireComponent } from './modification-horaire/modification-horaire.component';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { OffresComponent } from './offres/offres.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConfirmationCompteComponent } from './confirmation-compte/confirmation-compte.component';

const routes: Routes = [
  { path: '', 
  component:TemplateComponent,
  children: [
    {
     path: 'accueil', component:AccueilComponent
    },
    {
      path: 'description', component:DescriptionComponent
    },
    {
      path: 'liste-services', component:ListeServicesComponent
    },
    {
      path: 'liste-sous-services', component:SousServicesComponent
    },
    {
      path: 'liste-employe', component:ListeEmployeComponent
    },
    {
       path: 'listeRDVEmploye/:idEmploye', component: ListeRdvEmployeComponent 
    },
    {
      path: 'modificationServices/:idService', component: ModificationServiceComponent 
    },
    {
      path: 'modificationHoraire/:idEmploye', component: ModificationHoraireComponent 
    },
    {
      path: 'modificationSousServices/:idSousService', component: ModificationSousServicesComponent 
    },
    {
      path: 'liste-offre', component:ListeOffreComponent
    },
    {
      path: 'offres', component:OffresComponent
    },
    {
      path: 'statistiques', component:StatistiquesComponent
    },

  ]

  },
  { path: 'login', component:LoginComponent },
  { path: 'inscription', component:InscriptionComponent },
  { path: 'confirmation',component:ConfirmationCompteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
