import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from 'src/app/login/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [FormsModule, ReactiveFormsModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class LoginRoutingModule { }
