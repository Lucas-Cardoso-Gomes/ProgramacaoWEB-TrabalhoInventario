import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorFormComponent } from './computador-form.component';

describe('ComputadorFormComponent', () => {
  let component: ComputadorFormComponent;
  let fixture: ComponentFixture<ComputadorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputadorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
