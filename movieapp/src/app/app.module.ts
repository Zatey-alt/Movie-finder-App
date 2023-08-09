import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Module/Auth/signin/signin.component';
import { RegisterComponent } from './Module/Auth/register/register.component';
import { ForgotPasswordComponent } from './Module/Auth/forgot-password/forgot-password.component';
import { LandingpageComponent } from './Module/main/landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ToastrModule } from 'ngx-toastr';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './Module/main/dashboard/dashboard.component';
import { FooterComponent } from './Module/main/footer/footer.component';
import { MovieTrailerComponent } from './Module/main/movie-trailer/movie-trailer.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LandingpageComponent,
    DashboardComponent,
    FooterComponent,
    MovieTrailerComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
