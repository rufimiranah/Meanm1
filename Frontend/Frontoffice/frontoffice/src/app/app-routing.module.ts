import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
{path : 'facesnaps', component: ListComponent},
{path : '',component: HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
