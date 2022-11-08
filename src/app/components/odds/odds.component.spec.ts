import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddsComponent } from './odds.component';

describe('OddsComponent', () => {
  let component: OddsComponent;
  let fixture: ComponentFixture<OddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
