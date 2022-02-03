import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerEditComponent } from './jobseeker-edit.component';

describe('JobseekerEditComponent', () => {
  let component: JobseekerEditComponent;
  let fixture: ComponentFixture<JobseekerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
