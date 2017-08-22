import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ForSaleService } from '../for-sale.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ForSaleService]
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private forSaleService: ForSaleService) { }

  ngOnInit() {
    this.forSale = this.forSaleService.getForSale();
    this.jobs = this.jobsService.getJobs();
  }

    forSale: Listing[];
    jobs: Listing[];

    housing: Listing[] = [
      new Listing("Fixer Upper- Distressed - Divorce - Estate -Foreclosure -Job Transfer", 0,
        "https://images.craigslist.org/00v0v_iV6HScNavqJ_600x450.jpg", "PRINCIPLES ONLY!!! - I am looking for any Fixer Upper House or Mobile with Land. - Take Over Payments - No Bank Involvement - No Project Too Big - Foreclosure - Job Transfer - Jail - Death in the Family - Estate - Divorce - Fixer. If you have a property that the bank will not finance then call me. - Free advice - I can Help. Contact me at 503 seven three four 0681. You can leave a message if I am Driving. Thank you.", "Portland Metro Area", 1),
      new Listing("$1530 / 1br - 597ft2 - 24 Hour Fitness Gym Access, Washer & Dryer In Each Home!", 1530,
        "https://images.craigslist.org/00L0L_g6hXVcVqsR0_600x450.jpg", "20 Pettygrove is 6 story building located in a residential area of NW Portland featuring spaciously designed studios, 1 bedroom and 2 bedroom apartment homes. We are just walking distance from the upscale Pearl District, 3 dog parks, a huge array of shopping, one of a kind restaurants, locally owned boutiques, miles of nearby sites to explore, major bus lines and the Streetcar. Come in today to see why the Alphabet District is the place to be. Northwest is the premium place to be in Portland, so come see us today!\n-Granite Countertops\n-24 Hour Fitness Gym\n-Controlled Access\n-City Views In Select Homes\n-Additional Storage\n-Online Payments Available\n-Black appliances\n-Washer & Dryer In Each Home\n-Dishwasher", "NW Portland", 2),
      new Listing("$399000 / 4br - 2462ft2 - River Front Home of Your Dreams!", 399000,
        "https://images.craigslist.org/00d0d_3tF3z4GeNzC_600x450.jpg", "4bd/3bth well-maintained cedar bevel siding home located along the Nestucca River, majestic trees in a semi-secluded area, Some of this home's outstanding features: Main level a LG master bd & master ba, vaulted ceilings, open floor plan, heat pump, & a new roof in 2015. An Oversized deck with a covered area, garden shed, inviting yard, LG 3 car Garage, gas fireplace.\nCall Nick or Ike for MORE details", "Beaver, OR", 3),
      new Listing("1br - Cozy log cabin, perfect for romantic weekend retreat!", 100,
        "https://images.craigslist.org/00E0E_iaKIjSwSZqo_600x450.jpg", "For the same cost of a hotel room, you could stay in a cozy little one bedroom log cabin, overlooking the Washougal River. The cabin is located fifteen minutes from the 205 bridge, and twenty minutes from the I-5 bridge, at the mouth of the Columbia River Gorge. Close to town, but secluded, we have an abundance of hiking trails and river walks close by. The cabin features an extremely comfortable queen size bed, living room, full kitchen, wood stove, cable TV, DVD player, Wi-Fi and laundry facilities onsite. It would be a great place to escape for a romantic weekend, or a place to find some peace and solitude from the hustle and bustle of life. The rent is $100 per night, and $600 per week. If you are planning a romantic getaway, we could even arrange to have chocolates, wine, and flowers awaiting your arrival. Just let us know, and we'll work out all the details for you. Hope to see you soon!\n$100 a night \n$600 a week \nNo hidden fees!", "Anywhere", 4),
     ];

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
