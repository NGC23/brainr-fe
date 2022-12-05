import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDashboardPageRoutingModule } from './my-dashboard-routing.module';

import { MyDashboardPage } from './my-dashboard.page';
import { DashboardPopoverPage } from '../dashboard-popover/dashboard-popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyDashboardPageRoutingModule
  ],
  declarations: [MyDashboardPage, DashboardPopoverPage]
})
export class MyDashboardPageModule {}
