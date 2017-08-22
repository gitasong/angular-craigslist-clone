import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { JobsComponent } from './jobs/jobs.component';
import { HousingComponent } from './housing/housing.component';
import { PersonalsComponent } from './personals/personals.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ForSaleDetailComponent } from './for-sale-detail/for-sale-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'for-sale',
    component: ForSaleComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'housing',
    component: HousingComponent
  },
  {
    path: 'personals',
    component: PersonalsComponent
  },
  {
    path: 'for-sale/:id',
    component: ForSaleComponent
  },
  {
    path: 'jobs/:id',
    component: JobsComponent
  },
  {
    path: 'housing/:id',
    component: HousingComponent
  },
  {
    path: 'personals/:id',
    component: PersonalsComponent
  },
  {
    path: 'job-detail/:id',
    component: JobDetailComponent
  },
  {
    path: 'for-sale-detail/:id',
    component: ForSaleDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
