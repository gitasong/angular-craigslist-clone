import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
  providers: [HousingService]
})
export class HousingComponent implements OnInit {
  housing: Listing[];

  constructor(private router: Router, private housingService: HousingService) { }

  ngOnInit() {
    this.housing = this.housingService.getHousing();
  }

  goToHousingPage(clickedListing: Listing) {
    this.router.navigate(['housing', clickedListing.id]);
  };
}
