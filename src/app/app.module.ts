import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAllComponent } from './student-all/student-all.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [ 
  {path:'all',component:StudentAllComponent}, 
  {path:'add',component:StudentCreateComponent}, 
  {path:'edit/:id',component:StudentEditComponent}, 
  {path:'',redirectTo:'all',pathMatch:'full'}, 
]; 

@NgModule({
  declarations: [
    AppComponent,
    StudentAllComponent,
    StudentCreateComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
