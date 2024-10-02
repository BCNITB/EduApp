import { TestBed } from '@angular/core/testing';

import { TranlateConfigService } from './tranlate-config.service';

describe('TranlateConfigService', () => {
  let service: TranlateConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranlateConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
