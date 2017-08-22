import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { JobsComponent } from './jobs/jobs.component';
import { HousingComponent } from './housing/housing.component';
import { PersonalsComponent } from './personals/personals.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ForSaleComponent,
    JobsComponent,
    HousingComponent,
    PersonalsComponent,
    ListingDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
