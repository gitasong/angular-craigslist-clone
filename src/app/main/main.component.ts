import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  export class MarketplaceComponent {
  forSale: Listing[] = [
   new Listing("Coffee table", 35,
       "https://images.craigslist.org/00O0O_lv5w5Ft7siU_600x450.jpg", "Very well built coffee table with real solid wood.\nHas had a little repair with liquid nails on the bottom of the bottom shelf see pictures.\nIs scratched on surface see pictures\nMeasures 44 inches long 22 inches wide 20 inches high.", "NE Portland", 1),
   new Listing("Certified Stunning Apatite/Sapphire 19.75 cttw Bracelet in 14K gold", 600,
       "https://images.craigslist.org/00e0e_dFopA98UrMT_600x450.jpg", "Beautiful BRACELET adorned with 16 genuine 'swimming pool BLUE emerald-cut APATITES (approx. 15.43 cttw) prong set, and 288 genuine round-cut white SAPPHIRES (approx. 4.32 cttw) for a total of approx. 15.43 cttw. Flexible bracelet is secured with an insert clasp, has a bright polished finish (it has been very gently used) and it is excellent condition.\nThis beauty is crafted in solid 14K yellow gold. Measures approx. 7 1/4\" long and is approx. 9 mm wide.\nTotal weight is approx: 17.0 grams.\nComes with a certificate by USGL. Very impressive! Must see!\nBought at $2,800, now asking $600.", "Oregon City", 2),
   new Listing("Mid-Century Modern Dishes Mikasa Everfresh Yellow Daffodils Excellent!", 20,
       "https://images.craigslist.org/00j0j_4KR7chPeP4v_600x450.jpg", "These mid-century dishes are in excellent condition! Mikasa Everfresh Daffodils.\n12 1/2\" Serving platter/ Chop plate $20\nThree - 10 3/4\" Dinner plate $15 each \nTwo - 7 5/8\" Bread/Salad plate $10 each\nHeliotrope Vintage\nCamas, WA", "Camas, WA", 3),
   new Listing("Iphone 6S Plus - 64GB", 400,
       "https://images.craigslist.org/00o0o_70dOX7dMXqD_600x450.jpg", "Iphone 6S Plus in excellent condition. Will come with wall charger and headphones.", "Montavilla", 4),
 ];

}
