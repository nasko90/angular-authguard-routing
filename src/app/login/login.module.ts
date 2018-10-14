import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from 'src/app/login/login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,ReactiveFormsModule
  ],
  declarations: [],
})
export class LoginModule { }
