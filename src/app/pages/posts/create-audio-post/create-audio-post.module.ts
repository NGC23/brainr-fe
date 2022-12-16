import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAudioPostPageRoutingModule } from './create-audio-post-routing.module';

import { CreateAudioPostPage } from './create-audio-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAudioPostPageRoutingModule
  ],
  declarations: [CreateAudioPostPage]
})
export class CreateAudioPostPageModule {}
