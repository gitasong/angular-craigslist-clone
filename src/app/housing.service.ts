import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { HOUSING } from './housing-data';

@Injectable()
export class HousingService {

  constructor() { }

  getHousing() {
    return HOUSING;
  }
}
