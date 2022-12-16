import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateImagePostPageRoutingModule } from './create-image-post-routing.module';

import { CreateImagePostPage } from './create-image-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateImagePostPageRoutingModule
  ],
  declarations: [CreateImagePostPage]
})
export class CreateImagePostPageModule {}
