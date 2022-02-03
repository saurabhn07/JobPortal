import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerCreateComponent } from './jobseeker-create.component';

describe('JobseekerCreateComponent', () => {
  let component: JobseekerCreateComponent;
  let fixture: ComponentFixture<JobseekerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
