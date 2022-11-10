import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../service/freelancer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  find!: string
  constructor(private freelancerService: FreelancerService) { }
  findData(e: any) {
    this.freelancerService.getFreelancerSearch(e)
  }

  ngOnInit(): void {
  }

}
