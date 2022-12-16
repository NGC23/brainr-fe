import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateQaPostPage } from './create-qa-post.page';

const routes: Routes = [
  {
    path: '',
    component: CreateQaPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateQaPostPageRoutingModule {}
