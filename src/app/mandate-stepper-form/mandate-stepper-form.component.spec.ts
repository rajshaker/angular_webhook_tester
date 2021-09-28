import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateStepperFormComponent } from './mandate-stepper-form.component';

describe('MandateStepperFormComponent', () => {
  let component: MandateStepperFormComponent;
  let fixture: ComponentFixture<MandateStepperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandateStepperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateStepperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
