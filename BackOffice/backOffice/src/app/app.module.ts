import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ContainerComponent } from './template/container/container.component';
import { FooterComponent } from './template/footer/footer.component';
import { TemplateComponent } from './template/template/template.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { HeaderComponent } from './template/header/header.component';
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
import { ConfirmationCompteComponent } from './confirmation-compte/confirmation-compte.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    InscriptionComponent,
    ContainerComponent,
    FooterComponent,
    TemplateComponent,
    NavbarComponent,
    HeaderComponent,
    DescriptionComponent,
    ListeServicesComponent,
    SousServicesComponent,
    ListeEmployeComponent,
    ListeRdvEmployeComponent,
    ModificationServiceComponent,
    ModificationSousServicesComponent,
    ModificationHoraireComponent,
    ListeOffreComponent,
    OffresComponent,
    StatistiquesComponent,
    ConfirmationCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
