import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, PhonePipe } from './app.component';
import { ParentFreelancerComponent } from './parent-freelancer/parent-freelancer.component';
import { ChildFreelancerComponent } from './child-freelancer/child-freelancer.component';
import { DetailFreelancerComponent } from './detail-freelancer/detail-freelancer.component';
import { AddFreelancerComponent } from './add-freelancer/add-freelancer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFreelancerComponent,
    ChildFreelancerComponent,
    DetailFreelancerComponent,
    AddFreelancerComponent,
    PhonePipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
