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
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ForSaleDetailComponent } from './for-sale-detail/for-sale-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ForSaleComponent,
    JobsComponent,
    HousingComponent,
    PersonalsComponent,
    JobDetailComponent,
    ForSaleDetailComponent
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
