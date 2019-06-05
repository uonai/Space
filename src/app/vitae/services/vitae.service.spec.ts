import { TestBed } from '@angular/core/testing';

import { VitaeService } from './vitae.service';

describe('VitaeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VitaeService = TestBed.get(VitaeService);
    expect(service).toBeTruthy();
  });
});
