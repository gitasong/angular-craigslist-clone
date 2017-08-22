import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ForSaleService } from '../for-sale.service';

@Component({
  selector: 'app-for-sale-detail',
  templateUrl: './for-sale-detail.component.html',
  styleUrls: ['./for-sale-detail.component.css'],
  providers: [ForSaleService]
})
export class ForSaleDetailComponent implements OnInit {
  listingId: number;
  listingToDisplay: Listing;

  constructor(private route: ActivatedRoute,
  private location: Location,
  private forSaleService: ForSaleService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = parseInt(urlParameters['id']);
    });
    this.listingToDisplay = this.forSaleService.getForSaleById(this.listingId);
  }
}
