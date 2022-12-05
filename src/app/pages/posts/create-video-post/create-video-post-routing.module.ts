import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateVideoPostPage } from './create-video-post.page';

const routes: Routes = [
  {
    path: '',
    component: CreateVideoPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateVideoPostPageRoutingModule {}
