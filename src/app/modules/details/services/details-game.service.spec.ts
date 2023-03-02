import { TestBed } from '@angular/core/testing';

import { DetailsGameService } from './details-game.service';

describe('DetailsGameService', () => {
  let service: DetailsGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
