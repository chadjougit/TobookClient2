/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyServService } from './my-serv.service';

describe('MyServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServService]
    });
  });

  it('should ...', inject([MyServService], (service: MyServService) => {
    expect(service).toBeTruthy();
  }));
});
