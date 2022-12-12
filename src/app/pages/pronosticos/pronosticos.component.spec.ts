import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronosticosComponent } from './pronosticos.component';

describe('PronosticosComponent', () => {
  let component: PronosticosComponent;
  let fixture: ComponentFixture<PronosticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronosticosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
