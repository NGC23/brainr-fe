import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDocumentPostPageRoutingModule } from './create-document-post-routing.module';

import { CreateDocumentPostPage } from './create-document-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDocumentPostPageRoutingModule
  ],
  declarations: [CreateDocumentPostPage]
})
export class CreateDocumentPostPageModule {}
