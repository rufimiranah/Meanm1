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
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
