import { TestBed } from '@angular/core/testing';

import { InstructorsHttpService } from './instructors-http.service';

describe('InstructorsHttpService', () => {
  let service: InstructorsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
