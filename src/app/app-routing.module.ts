import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  { path: 'home', component: MainComponent}, 
  { path: 'about', component: MainComponent}, 
  { path: 'pricing', component: MainComponent}, 
  { path: 'videos', component: MainComponent}, 
  { path: 'testimonials', component: MainComponent},
  { path: 'contact', component: MainComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
