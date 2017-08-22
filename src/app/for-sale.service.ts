import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { FORSALE } from './for-sale-data';

@Injectable()
export class ForSaleService {

  constructor() { }

  getForSale() {
    return FORSALE;
  }

}
