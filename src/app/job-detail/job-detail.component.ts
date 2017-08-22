import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
  providers: [JobsService]
})
export class JobDetailComponent implements OnInit {
  // jobs: Listing[];
  listingId: number;
  listingToDisplay: Listing;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = parseInt(urlParameters['id']);
    });
    this.listingToDisplay = this.jobsService.getJobById(this.listingId);
  }

  // goToJobDetailPage(clickedListing: Listing) {
  //   this.router.navigate(['job-detail', clickedListing.id]);
  // };
}
