import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Config, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { PostService } from '../../../services/post/posts/post.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.page.html',
  styleUrls: ['./my-posts.page.scss'],
})
export class MyPostsPage implements OnInit {
  // Gets a reference to the list element
 @ViewChild('postsList', { static: true }) postList: IonList;

 ios: boolean;
 dayIndex = 0;
 queryText = '';
 segment = 'all';
 excludeTracks: any = [];
 shownSessions: any = [];
 posts: any = [];
 confDate: string;
 showSearchbar: boolean;

  constructor(
   public alertCtrl: AlertController,
   public loadingCtrl: LoadingController,
   public modalCtrl: ModalController,
   public router: Router,
   public routerOutlet: IonRouterOutlet,
   public toastCtrl: ToastController,
   public config: Config,
   public postService: PostService
  ) { }

  async ngOnInit() {
  	await this.postService.getPosts().then( data => {
			data.subscribe(res => {
				console.log("the fuck >>", res);
				this.posts = res.data
			})
		});
  }

  async openSocial(network: string, fab: HTMLIonFabElement) {
   const loading = await this.loadingCtrl.create({
     message: `Posting to ${network}`,
     duration: (Math.random() * 1000) + 500
   });
   await loading.present();
   await loading.onWillDismiss();
   fab.close();
 }

}
