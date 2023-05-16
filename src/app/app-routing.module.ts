import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionComponent } from './components/experiencia/edicion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';

const routes: Routes =[
  { path: 'editexp/:id', component: EdicionComponent}

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

















//const routes: Routes = [
//  {path:"", component: HomeComponent},
//  { path: 'login', component: LoginComponent },
//  {path: 'nuevaexp', component: NewExperienciaComponent},
//  { path: 'editexp/:id', component: EditExperienciaComponent},
//  {path: 'nuevaeduc', component: NeweducacionComponent},
//  {path: 'editeduc', component: EditeducacionComponent},
//  {path: 'edihys', component: EdithysComponent},
//  {path: 'newhys', component: NewhysComponent},

//];
  



