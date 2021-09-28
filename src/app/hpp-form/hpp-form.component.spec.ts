import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HppFormComponent } from './hpp-form.component';

describe('HppFormComponent', () => {
  let component: HppFormComponent;
  let fixture: ComponentFixture<HppFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HppFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
