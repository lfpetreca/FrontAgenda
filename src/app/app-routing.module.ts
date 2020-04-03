import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaFrontComponent } from './tela-front/tela-front.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path:'', component: TelaLoginComponent},
  {path:'tela-front', component: TelaFrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
