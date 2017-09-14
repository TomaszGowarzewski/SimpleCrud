import { TestBed, inject } from '@angular/core/testing';

import { EmployeesRepositoryService } from './employees-repository.service';

describe('EmployeesRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesRepositoryService]
    });
  });

  it('should be created', inject([EmployeesRepositoryService], (service: EmployeesRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
