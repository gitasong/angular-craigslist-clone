import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { PersonalsService } from '../personals.service';

@Component({
  selector: 'app-personals',
  templateUrl: './personals.component.html',
  styleUrls: ['./personals.component.css'],
  providers: [PersonalsService]
})
export class PersonalsComponent implements OnInit {
  personals: Listing[];

  constructor(private router: Router, private personalsService: PersonalsService) { }

  ngOnInit() {
    this.personals = this.personalsService.getPersonals();
  }

  goToPersonalsPage(clickedListing: Listing) {
    this.router.navigate(['personals', clickedListing.id]);
  };
}
