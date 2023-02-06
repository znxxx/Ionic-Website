import { TestBed } from '@angular/core/testing';

import { ScoreProviderService } from './score-provider.service';

describe('ScoreProviderService', () => {
  let service: ScoreProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
