import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  forSale: Listing[] = [
    new Listing("Coffee table", 35,
      "https://images.craigslist.org/00O0O_lv5w5Ft7siU_600x450.jpg", "Very well built coffee table with real solid wood.\nHas had a little repair with liquid nails on the bottom of the bottom shelf see pictures.\nIs scratched on surface see pictures\nMeasures 44 inches long 22 inches wide 20 inches high.", "NE Portland", 1),
    new Listing("Certified Stunning Apatite/Sapphire 19.75 cttw Bracelet in 14K gold", 600,
      "https://images.craigslist.org/00e0e_dFopA98UrMT_600x450.jpg", "Beautiful BRACELET adorned with 16 genuine 'swimming pool BLUE emerald-cut APATITES (approx. 15.43 cttw) prong set, and 288 genuine round-cut white SAPPHIRES (approx. 4.32 cttw) for a total of approx. 15.43 cttw. Flexible bracelet is secured with an insert clasp, has a bright polished finish (it has been very gently used) and it is excellent condition.\nThis beauty is crafted in solid 14K yellow gold. Measures approx. 7 1/4\" long and is approx. 9 mm wide.\nTotal weight is approx: 17.0 grams.\nComes with a certificate by USGL. Very impressive! Must see!\nBought at $2,800, now asking $600.", "Oregon City", 2),
    new Listing("Mid-Century Modern Dishes Mikasa Everfresh Yellow Daffodils Excellent!", 20,
      "https://images.craigslist.org/00j0j_4KR7chPeP4v_600x450.jpg", "These mid-century dishes are in excellent condition! Mikasa Everfresh Daffodils.\n12 1/2-inch Serving platter/ Chop plate $20\nThree - 10 3/4-inch Dinner plate $15 each \nTwo - 7 5/8-inch Bread/Salad plate $10 each\nHeliotrope Vintage\nCamas, WA", "Camas, WA", 3),
    new Listing("Iphone 6S Plus - 64GB", 400,
      "https://images.craigslist.org/00o0o_70dOX7dMXqD_600x450.jpg", "Iphone 6S Plus in excellent condition. Will come with wall charger and headphones.", "Montavilla", 4),
   ];

   jobs: Listing[] = [
     new Listing("Web designer", 58000,
       "https://images.craigslist.org/00101_iDVkghHsxo_600x450.jpg", "Seeking a Web Designer with skills in HTML, PHP, WordPress, Java Script and other web languages for ongoing multiple movie websites. Please send your resume, No phone calls please.", "North Portland", 1),
     new Listing("Attorney Counselor", 80000,
       "http://gazettereview.com/wp-content/uploads/2017/02/Attorneycover.jpg", "OAAP ATTORNEY COUNSELOR POSITION\nThe Oregon Attorney Assistance Program is hiring an attorney counselor to assist lawyers, judges, law students, and other members of the legal community with a wide range of personal issues including substance use, career transition, behavioral health, and stress management. Primary responsibilities include individual counseling and referrals to community resources, facilitation of support groups, CLE presentations, and crisis intervention.\nPreferred applicants will have 1) substance use and behavioral health counseling experience, including recovery support, group facilitation, crisis intervention, and trauma counseling; 2) a counseling or social work license, counseling certification, or equivalent experience and willingness to obtain relevant certification/license; 3) five years of experience practicing law or equivalent relevant experience and knowledge of the legal community; 4) if in recovery, a minimum of five consecutive years in recovery; and 5) writing and public speaking expertise.\nApplicant must be flexible, organized, empathetic, self-directed, and a team player.\nPosition requires travel throughout Oregon. Salary dependent on experience. Excellent benefit package. To apply, please send a cover letter, resume, and salary requirements to: Shari R. Gregory, LCSW, JD, OAAP Assistant Director, sharig@oaap.org. No phone calls please.", "Downtown Portland", 2),
     new Listing("Registered Nurse - Per Diem", 45000,
       "https://images.craigslist.org/00d0d_3tF3z4GeNzC_600x450.jpg", "Are you looking for a new challenge? Would you like to work for our world class health care organization? Samaritan North Lincoln Hospital in Lincoln City Oregon is seeking Registered Nurse for our Emergency Department.\nThe Emergency Department provides care for patients with a wide variety of needs from non-critical to emergent medical conditions including emergent and urgent mental health care. All patients are welcome whether walking in or arriving by emergency transport. All Emergency Department staff are certified to care for critical cardiac and trauma patients including children.\nRequirements/Preferences:\n•	Current unencumbered Oregon RN License required.\n•	Healthcare Provider BLS required. Other certifications may be required for department specific positions.\n•	Minimum of one year recent experience in an acute care setting preferred.\n•	SNLH Emergency Svcs:\na)	ACLS. ENPC and TNCC within six (6) months of hire required.\nTo apply online for this position, or for additional information about employment opportunities with Samaritan Health Services, please visit our website at: http://www.samhealth.org/employment", "Licoln City, OR", 3),
     new Listing("Hiring article and blog post writers for ongoing work", 10,
       "https://images.craigslist.org/01111_eJLfNFOjZtn_600x450.jpg", "We are now hiring writers and editors to work for our organization.\nPay starts at $10 per 100 words for writers and $3 per 100 words for editors.\nTo apply please submit a recent sample of your writing here at http://iapwe.org/apply-49340.\nDue to the volume of applications we have been receiving, you may only receive a reply if your application is accepted.", "Anywhere", 4),
    ];

}
