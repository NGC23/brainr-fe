import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './services/check-tutorial.service';
import { AuthgaurdService } from './services/auth/authgaurd.service';

/**
 * All general single pages go here, these that appear in the menu are located
 * in the tabs page and tabs routing module
 * All child pages will be in the tabs page
 */

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
		canActivate: [AuthgaurdService],
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule),
		canActivate: [AuthgaurdService],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule),
		canActivate: [AuthgaurdService],
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial],
		canActivate: [AuthgaurdService],
  },
  {
    path: 'create-qa-post',
    loadChildren: () => import('./pages/posts/create-qa-post/create-qa-post.module').then( m => m.CreateQaPostPageModule)
  },
  {
    path: 'create-audio-post',
    loadChildren: () => import('./pages/posts/create-audio-post/create-audio-post.module').then( m => m.CreateAudioPostPageModule)
  },
  {
    path: 'create-image-post',
    loadChildren: () => import('./pages/posts/create-image-post/create-image-post.module').then( m => m.CreateImagePostPageModule)
  },
  {
    path: 'create-document-post',
    loadChildren: () => import('./pages/posts/create-document-post/create-document-post.module').then( m => m.CreateDocumentPostPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
