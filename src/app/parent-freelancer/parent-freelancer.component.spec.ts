import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFreelancerComponent } from './parent-freelancer.component';

describe('ParentFreelancerComponent', () => {
  let component: ParentFreelancerComponent;
  let fixture: ComponentFixture<ParentFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
