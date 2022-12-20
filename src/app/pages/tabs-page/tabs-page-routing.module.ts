import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { AuthgaurdService } from '../../services/auth/authgaurd.service';


const routes: Routes = [
  {
    path: 'brainr',
    component: TabsPage,
    children: [
      {
       path: 'posts',
       children: [
					{
						path: 'detail/:postId',
						loadChildren: () => import('../post-detail/post-detail.module').then(m => m.PostDetailPageModule)
					},
         	{
						path: '',
						loadChildren: () => import('../posts/my-posts/my-posts.module').then(m => m.MyPostsPageModule),
						canActivate: [AuthgaurdService]
         	},
         	{
						path: 'create-image-post',
						loadChildren: () => import('../posts/create-image-post/create-image-post.module').then( m => m.CreateImagePostPageModule),
						canActivate: [AuthgaurdService]
					},
					{
						path: 'create-audio-post',
						loadChildren: () => import('../posts/create-audio-post/create-audio-post.module').then( m => m.CreateAudioPostPageModule),
						canActivate: [AuthgaurdService]
					},
					{
						path: 'create-document-post',
						loadChildren: () => import('../posts/create-document-post/create-document-post.module').then( m => m.CreateDocumentPostPageModule),
						canActivate: [AuthgaurdService]
					},
					{
						path: 'create-qa-post',
						loadChildren: () => import('../posts/create-qa-post/create-qa-post.module').then( m => m.CreateQaPostPageModule),
						canActivate: [AuthgaurdService]
					},
					{
						path: 'create-video-post',
						loadChildren: () => import('../posts/create-video-post/create-video-post.module').then( m => m.CreateVideoPostPageModule),
						canActivate: [AuthgaurdService]
					}
       ]
      },
      {
       path: 'dashboard',
       children: [
         {
           path: '',
           loadChildren: () => import('../dashboard/my-dashboard/my-dashboard.module').then( m => m.MyDashboardPageModule),
					 canActivate: [AuthgaurdService]
         }
       ]
      },
      {
        path: 'my-feed',
        loadChildren: () => import('../feed/my-feed/my-feed.module').then( m => m.MyFeedPageModule),
				canActivate: [AuthgaurdService]
      },
      {
       path: 'notifications',
       loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule),
			 canActivate: [AuthgaurdService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

