import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { PERSONALS } from './personals-data';

@Injectable()
export class PersonalsService {

  constructor() { }

  getPersonals() {
    return PERSONALS;
  }
}
