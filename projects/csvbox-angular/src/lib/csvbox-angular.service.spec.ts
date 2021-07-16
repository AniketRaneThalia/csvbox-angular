import { TestBed } from '@angular/core/testing';

import { CsvboxAngularService } from './csvbox-angular.service';

describe('CsvboxAngularService', () => {
  let service: CsvboxAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvboxAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
