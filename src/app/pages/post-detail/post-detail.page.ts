import { Component } from '@angular/core';

import { ConferenceData } from '../../services/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../services/user-data';
import { PostService } from '../../services/post/posts/post.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage {
  session: any;
  isFavorite = false;
  defaultHref = '';
	post = {};
	imageUri: SafeResourceUrl;

  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute,
		public postService: PostService,
		private sanitizer: DomSanitizer
  ) { }

  async ionViewWillEnter() {
		const postId = this.route.snapshot.paramMap.get('postId');

		if(postId === "") {
			console.error("postID not set");
		}
		await this.postService.getPostById(postId).then( data => {
			data.subscribe(res => {
				console.log("the fuck >>", res);
				this.post = res.data
				this.imageUri = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${res.data.upload}`);
				
			})
		});
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }

  shareSession() {
    console.log('Clicked share session');
  }
}
