import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ForSaleService } from '../for-sale.service';
import { JobsService } from '../jobs.service';
import { HousingService } from '../housing.service';
impoer { PersonalsService } from '../personals.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ForSaleService, JobsService, HousingService, PersonalsService]
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private forSaleService: ForSaleService, private jobsService: JobsService, private housingService: HousingService, private personalsService: PersonalsService) { }

  ngOnInit() {
    this.forSale = this.forSaleService.getForSale();
    this.jobs = this.jobsService.getJobs();
    this.housing = this.housingService.getHousing();
    this.personals = this.personalsService.getPersonals();
  }

    forSale: Listing[];
    jobs: Listing[];
    housing: Listing[];
    personals: Listing[];

      goToDetailPage(clickedListing: Listing) {
        this.router.navigate(['listings', clickedListing.id]);
      };

      goToForSalePage(clickedListing: Listing) {
        this.router.navigate(['for-sale', clickedListing.id]);
      };

      goToJobsPage(clickedListing: Listing) {
        this.router.navigate(['jobs', clickedListing.id]);
      };

      goToHousingPage(clickedListing: Listing) {
        this.router.navigate(['housing', clickedListing.id]);
      };

      goToPersonalsPage(clickedListing: Listing) {
        this.router.navigate(['personals', clickedListing.id]);
      };

}
