import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateQaPostPageRoutingModule } from './create-qa-post-routing.module';

import { CreateQaPostPage } from './create-qa-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateQaPostPageRoutingModule
  ],
  declarations: [CreateQaPostPage]
})
export class CreateQaPostPageModule {}
