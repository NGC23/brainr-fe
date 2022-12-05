import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFeedPage } from './my-feed.page';

const routes: Routes = [
  {
    path: '',
    component: MyFeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFeedPageRoutingModule {}
