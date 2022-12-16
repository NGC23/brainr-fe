import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import { AuthgaurdService } from '../../providers/auth/authgaurd.service';


const routes: Routes = [
  {
    path: 'brainr',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      //New Pages
      {
       path: 'posts',
       children: [
         {
           path: '',
           loadChildren: () => import('../posts/my-posts/my-posts.module').then(m => m.MyPostsPageModule),
					 canActivate: [AuthgaurdService]
         },
         {
          path: 'create-post',
          loadChildren: () => import('../posts/create-post/create-post.module').then( m => m.CreatePostPageModule),
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

