import { TestBed } from '@angular/core/testing';

import { CompContainerService } from './comp-container.service';

describe('CompContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompContainerService = TestBed.get(CompContainerService);
    expect(service).toBeTruthy();
  });
});
