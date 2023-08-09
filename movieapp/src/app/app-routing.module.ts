import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './Module/Auth/signin/signin.component';
import { RegisterComponent } from './Module/Auth/register/register.component';
import { ForgotPasswordComponent } from './Module/Auth/forgot-password/forgot-password.component';
import { LandingpageComponent } from './Module/main/landingpage/landingpage.component';



const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'signin'},
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'main-page', component: LandingpageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
