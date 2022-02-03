import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerOptionsComponent } from './jobseeker-options.component';

describe('JobseekerOptionsComponent', () => {
  let component: JobseekerOptionsComponent;
  let fixture: ComponentFixture<JobseekerOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
