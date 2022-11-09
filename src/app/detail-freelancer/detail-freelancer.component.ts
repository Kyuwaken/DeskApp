import { Component, OnInit } from '@angular/core';
import { Freelancer } from '../model/freelancer';
import { ActivatedRoute } from '@angular/router';
import { FreelancerService } from '../service/freelancer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-freelancer',
  templateUrl: './detail-freelancer.component.html',
  styleUrls: ['./detail-freelancer.component.css']
})
export class DetailFreelancerComponent implements OnInit {
  namePage: string = "Detail Contact"
  freelancer: Freelancer | undefined;
  constructor(
    private freelancerService: FreelancerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFreelancer()
  }
  getFreelancer(): void {
    const idParams = Number(this.route.snapshot.paramMap.get('id'))
    this.freelancerService.getFreelancer(idParams).subscribe(a => this.freelancer = a)
  }
  goBack(): void {
    this.location.back()
  }

}
