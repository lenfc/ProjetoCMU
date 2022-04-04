import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';


const routes: Routes = [
  // Main redirect
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // Handle all other routes
  {path: '**',  redirectTo: 'home'},
  //Main route
  {path: 'home', component: HomeComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
