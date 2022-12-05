import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFeedPageRoutingModule } from './my-feed-routing.module';

import { MyFeedPage } from './my-feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFeedPageRoutingModule
  ],
  declarations: [MyFeedPage]
})
export class MyFeedPageModule {}
