import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/login/auth.guard';


const appRoutes: Routes = [
  { path: 'testmanaging',  
   loadChildren: './test-managing/test-managing.module#TestManagingModule',
   canActivate: [AuthGuard],
   data: {claimType: 'isAuthenticated'}},
   
  { path: 'login', 
    loadChildren: './login/login.module#LoginModule',
   },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes)
    ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}