import { TestBed } from '@angular/core/testing';

import { SoccerService } from './soccer.service';

describe('SoccerService', () => {
  let service: SoccerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoccerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
