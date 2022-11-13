import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadtoheadComponent } from './headtohead.component';

describe('HeadtoheadComponent', () => {
  let component: HeadtoheadComponent;
  let fixture: ComponentFixture<HeadtoheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadtoheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadtoheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
