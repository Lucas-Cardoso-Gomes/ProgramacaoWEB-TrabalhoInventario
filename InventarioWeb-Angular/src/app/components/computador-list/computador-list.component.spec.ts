import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorListComponent } from './computador-list.component';

describe('ComputadorListComponent', () => {
  let component: ComputadorListComponent;
  let fixture: ComponentFixture<ComputadorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputadorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
