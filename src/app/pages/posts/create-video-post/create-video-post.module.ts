import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVideoPostPageRoutingModule } from './create-video-post-routing.module';

import { CreateVideoPostPage } from './create-video-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVideoPostPageRoutingModule
  ],
  declarations: [CreateVideoPostPage]
})
export class CreateVideoPostPageModule {}
