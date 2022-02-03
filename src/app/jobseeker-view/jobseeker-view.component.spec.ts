import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerViewComponent } from './jobseeker-view.component';

describe('JobseekerViewComponent', () => {
  let component: JobseekerViewComponent;
  let fixture: ComponentFixture<JobseekerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
