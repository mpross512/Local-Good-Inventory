import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from './checkin/checkin.component';
import { HomeComponent } from './home/home.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'checkin', component:CheckinComponent},
  {path:'new-registration',component:NewRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
