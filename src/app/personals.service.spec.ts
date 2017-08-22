import { TestBed, inject } from '@angular/core/testing';

import { PersonalsService } from './personals.service';

describe('PersonalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalsService]
    });
  });

  it('should ...', inject([PersonalsService], (service: PersonalsService) => {
    expect(service).toBeTruthy();
  }));
});
