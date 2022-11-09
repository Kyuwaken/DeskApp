import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFreelancerComponent } from './add-freelancer/add-freelancer.component';
import { DetailFreelancerComponent } from './detail-freelancer/detail-freelancer.component';
import { ParentFreelancerComponent } from './parent-freelancer/parent-freelancer.component';

const routes: Routes = [
  { path: '', component: ParentFreelancerComponent },
  { path: 'freelancer-detail/:id', component: DetailFreelancerComponent },
  { path: 'freelancer-add', component: AddFreelancerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
