import { Component, OnInit } from '@angular/core';
import { ForSaleService } from '../for-sale.service';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css'],
  providers: [ForSaleService]
})
export class ForSaleComponent implements OnInit {

  constructor(private router: Router, private forSaleService: ForSaleService) { }

  ngOnInit() {
  }
}
