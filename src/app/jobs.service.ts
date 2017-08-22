import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { JOBS } from './jobs-data';

@Injectable()
export class JobsService {

  constructor() { }

  getJobs() {
    return JOBS;
  }

  getJobById(jobId: number){
    for (var i = 0; i <= JOBS.length - 1; i++) {
      if (JOBS[i].id === jobId) {
        return JOBS[i];
      }
    }
  }

}
