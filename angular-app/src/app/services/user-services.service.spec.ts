import { TestBed } from '@angular/core/testing';

import { UserServicesService } from './user-services.service';

describe('ArticleServicesService', () => {
  let service: UserServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
