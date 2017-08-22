import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { JobsComponent } from './jobs/jobs.component';
import { HousingComponent } from './housing/housing.component';
import { PersonalsComponent } from './personals/personals.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
