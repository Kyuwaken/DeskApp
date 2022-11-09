import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFreelancerComponent } from './child-freelancer.component';

describe('ChildFreelancerComponent', () => {
  let component: ChildFreelancerComponent;
  let fixture: ComponentFixture<ChildFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
