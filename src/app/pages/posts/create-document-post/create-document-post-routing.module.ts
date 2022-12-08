import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDocumentPostPage } from './create-document-post.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDocumentPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDocumentPostPageRoutingModule {}
