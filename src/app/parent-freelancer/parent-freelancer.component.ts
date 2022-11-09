import { Component, OnInit } from '@angular/core';
import { Freelancer, FreelancerModel } from '../model/freelancer';
import { ActivatedRoute } from '@angular/router';
import { FreelancerService } from '../service/freelancer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-parent-freelancer',
  templateUrl: './parent-freelancer.component.html',
  styleUrls: ['./parent-freelancer.component.css']
})
export class ParentFreelancerComponent implements OnInit {
  namePage: string = "Freelance Contact Directory"
  freelancer: Freelancer[] = []
  modelFreelancer = new FreelancerModel('name', 'phone', 'skill', 'notes')
  submitted = false;
  constructor(private freelancerService: FreelancerService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.freelancer = []
    this.getFreelancers()
  }
  onSubmit() {
    this.submitted = true;
    this.addFreelancer();
  }
  getFreelancers(): void {
    this.freelancerService.getFreelancers().subscribe(flr => this.freelancer = flr)
  }
  goBack(): void {
    this.location.back()
  }
  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
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
  }

}
