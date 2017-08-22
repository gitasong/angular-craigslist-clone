import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobsService]
})
export class JobsComponent implements OnInit {
  jobs: Listing[];

  constructor(private router: Router, private jobsService: JobsService) { }

  ngOnInit() {
    this.jobs = this.jobsService.getJobs();
  }

  goToJobsPage(clickedListing: Listing) {
    this.router.navigate(['jobs', clickedListing.id]);
  };

}
