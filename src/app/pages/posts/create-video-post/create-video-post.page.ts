import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoPost } from '../../../interfaces/posts/video-post';

@Component({
  selector: 'app-create-video-post',
  templateUrl: './create-video-post.page.html',
  styleUrls: ['./create-video-post.page.scss'],
})
export class CreateVideoPostPage  implements OnInit {

	videoPost: VideoPost = { name: '', caption: '', tags: '', video: '' };
	submitted = false;
 
	 constructor(
		private router: Router
	 ) { }
 
	 ngOnInit() {
	 }
 
	 createPost(form: NgForm) {
		this.submitted = true;
 
		if (form.valid) {
			console.log(this.videoPost);
		}
	}
 
	loadImageFromDevice(event) {
		
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.readAsDataURL(file);
		
		reader.onload = () => {
		console.log("reader.result", reader.result);
			this.videoPost.video = reader.result;
		};
	
		reader.onerror = (error) => {
	
			//handle errors
	
		};
	};
}
