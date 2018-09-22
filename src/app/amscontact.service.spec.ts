import { TestBed, inject } from '@angular/core/testing';

import { AmscontactService } from './amscontact.service';

describe('AmscontactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmscontactService]
    });
  });

  it('should be created', inject([AmscontactService], (service: AmscontactService) => {
    expect(service).toBeTruthy();
  }));
});
