import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EdithysComponent } from './components/hys/edithys.component';
import { NewhysComponent } from './components/hys/newhys.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  { path: 'login', component: LoginComponent },
  {path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaeduc', component: NeweducacionComponent},
  {path: 'editeduc', component: EditeducacionComponent},
  {path: 'edihys', component: EdithysComponent},
  {path: 'newhys', component: NewhysComponent},

];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
