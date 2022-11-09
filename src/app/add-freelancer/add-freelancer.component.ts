import { Component, OnInit } from '@angular/core';
import { Freelancer, FreelancerModel } from '../model/freelancer'
import { FreelancerService } from '../service/freelancer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html',
  styleUrls: ['./add-freelancer.component.css']
})
export class AddFreelancerComponent implements OnInit {
  namePage: string = "Form Add new Contact"
  freelancer: Freelancer[] = []
  modelFreelancer = new FreelancerModel('', '', '', '')
  submitted = false;
  constructor(private freelancerService: FreelancerService, private location: Location) { }

  ngOnInit(): void {
    this.freelancer = []
  }
  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }
  onSubmit() {
    this.submitted = true;
    this.addFreelancer();
  }
  goBack(): void {
    this.location.back()
  }
  addFreelancer(
    name: string = this.modelFreelancer.name,
    phone: string = this.modelFreelancer.phone,
    skill: string = this.modelFreelancer.skill,
    notes: string = this.modelFreelancer.notes
  ): void {
    name = name.trim();
    phone = phone.trim();
    skill = skill.trim();
    notes = notes.trim();
    if (!name || !phone || !skill || !notes) { return }
    this.freelancerService.addFreelancer({ name, phone, skill, notes } as Freelancer)
      .subscribe(flr => {
        this.freelancer.push(flr)
      })
    this.freelancer = []
  }

}
