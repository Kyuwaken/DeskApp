import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Freelancer } from '../model/freelancer';
import { FreelancerService } from '../service/freelancer.service';

@Component({
  selector: 'app-child-freelancer',
  templateUrl: './child-freelancer.component.html',
  styleUrls: ['./child-freelancer.component.css']
})
export class ChildFreelancerComponent implements OnInit {
  @Input() childFreelancer!: Freelancer[]

  constructor(private freelancerService: FreelancerService) { }
  deleteFreelancer(id: number): void {
    let index = this.childFreelancer.findIndex(d => d.id === id)
    this.freelancerService.deleteFreeLancer(id).subscribe(a => this.childFreelancer.splice(index, 1))
  }
  ngOnInit(): void {
  }

}
