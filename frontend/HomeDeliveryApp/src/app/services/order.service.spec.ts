import { TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';

describe('ServicesService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('does some test where it is injected',
    inject([OrderService], (service: OrderService) => {
      expect(service).toBeTruthy();
    })
  );
});
