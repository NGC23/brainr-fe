import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAudioPostPage } from './create-audio-post.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAudioPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAudioPostPageRoutingModule {}
