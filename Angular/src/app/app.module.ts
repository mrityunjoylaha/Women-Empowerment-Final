import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgoComponent } from './ngo/ngo.component';
import { StepComponent } from './step/step.component';
import { Home2Component } from './home2/home2.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GuidelinesComponent } from './step/guidelines/guidelines.component';
import { TrainingSectorsComponent } from './step/training-sectors/training-sectors.component';
import { NgosComponent } from './step/ngos/ngos.component';
import { RegistrationComponent } from './step/registration/registration.component';
import { StatusComponent } from './step/status/status.component';
import { StepHomeComponent } from './step/step-home/step-home.component';
import { LoginComponent } from './step/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgoComponent,
    StepComponent,
    routingComponents,
    Home2Component,
    AboutUsComponent,
    ContactUsComponent,
    GuidelinesComponent,
    TrainingSectorsComponent,
    NgosComponent,
    RegistrationComponent,
    StatusComponent,
    StepHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
