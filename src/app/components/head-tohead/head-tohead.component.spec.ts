import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadToheadComponent } from './head-tohead.component';

describe('HeadToheadComponent', () => {
  let component: HeadToheadComponent;
  let fixture: ComponentFixture<HeadToheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadToheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadToheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
