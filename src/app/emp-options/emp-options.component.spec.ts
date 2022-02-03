import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOptionsComponent } from './emp-options.component';

describe('EmpOptionsComponent', () => {
  let component: EmpOptionsComponent;
  let fixture: ComponentFixture<EmpOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
