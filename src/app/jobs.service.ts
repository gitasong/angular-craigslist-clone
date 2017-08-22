import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { JOBS } from './jobs-data';

@Injectable()
export class JobsService {

  constructor() { }

  getJobs() {
    return JOBS;
  }

}
