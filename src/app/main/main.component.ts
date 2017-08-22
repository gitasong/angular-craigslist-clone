import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ForSaleService } from '../for-sale.service';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ForSaleService, JobsService]
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private forSaleService: ForSaleService, private jobsService: JobsService) { }

  ngOnInit() {
    this.forSale = this.forSaleService.getForSale();
    this.jobs = this.jobsService.getJobs();
  }

    forSale: Listing[];
    jobs: Listing[];
    housing: Listing[];

     personals: Listing[] = [
       new Listing("Solar eclipse buddy? - w4m", 0,
         "https://cbsnews1.cbsistatic.com/hub/i/2017/02/14/3238c4cd-dc92-4a23-b609-e76a52091797/annular-solar-eclipse-promo.jpg", "Seeking a buddy to head to the coast or down south to view the solar eclipse. I'm willing to go half on gas or even drive us there if you're willing to pitch in as well.\nSomeone who is able to hold a conversation and is adventurous.", "PDX", 1),
       new Listing("Single Seeking", 0,
         "https://upload.wikimedia.org/wikipedia/en/1/13/Harley_5-06.jpg", "Single female,honest,caring,and romantic..Many interest, outdoors,Harleys,Horses, and more...No games,drama,or b.s. Non 2 light drinker,non smoker ,no,drugs...Seeking a good man,with similar..Anywhere in Oregon, but prefer Eastern, Oregon..For friendship & a long-term relationship...If interested, get in touch...", "Anywhere, Oregon", 2),
       new Listing("Burger King-Sherwood/ Tualatin near 99W - m4w", 0,
         "http://hackthemenu.com/wp-content/uploads/2015/11/burger-king-suicide-burger-1032px.jpg", "I asked if you had a sister named Eileen....You even waved at me when I drove off......I felt real stupid for not asking if I could give you my number,,,,,,I would really like to get to know you. I know this is a long shot, but I have faith in the eclipse gods that you are seeking also....I usually eat my \"lunch\" there 7pm-730ish.. I work nearby~~", "sherwood/Tualatin", 3),
       new Listing("Back to the earth type seeking similar", 0,
         "http://www.zappos.com/images/z/2/6/3/1/9/2/263192-p-4x.jpg", "I was basically born in the wrong century, aside from science and equal rights, of course. I'm open and honest, I live on a farm, heat with wood, raise lots of my own food, including meat, and want to learn to hunt and fish. I'm an artist with an incredibly useless BFA and on a Celtic pagan spiritual path. I'm tall, curvy, messy and unapologetic. I love to hike with my dogs and swim in rivers and work in the garden, and read or watch a movie when I can make myself sit still long enough, which is rare, especially this time of year. I'm not much of a city person and prefer sitting by a fire to going to a bar. I've gotten away from my art, having become an entrepreneur last year, and am trying to re prioritize it. I am a practicing pagan, on a Druidic path, and part of a community which I love. I'm a former goth but it's still in my heart and my aesthetic is distinctly witchy. I'm looking for real connection with people I have things in common with, not those who view me as a novelty. I may sound like I take myself too seriously but I really, really don't. I'm usually the first one to laugh at myself. Politically I'm pretty far left and think the entire system is broken. Not much of a drinker, prefer cannabis these days and hate cigarette smoke. I do love a good dark beer.", "Hillsboro", 4),
      ];

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
