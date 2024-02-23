import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { HistoriqueComponent } from './historique/historique.component';
import { NotificationComponent } from './notification/notification.component';
import { PrestationComponent } from './prestation/prestation.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  //Customer
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'historique', component: HistoriqueComponent },
  {
    path: 'notification',
    component: NotificationComponent,
  },
  {
    path: 'prestation',
    component: PrestationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
