import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VideoPost } from '../../../interfaces/posts/video-post';
import { VideoPostService } from '../../../services/post/video/video-post.service';

@Component({
  selector: 'app-create-video-post',
  templateUrl: './create-video-post.page.html',
  styleUrls: ['./create-video-post.page.scss'],
})
export class CreateVideoPostPage  implements OnInit {

	videoPost: VideoPost = { name: '', caption: '', tags: '', upload: '' };
	submitted = false;
 
	 constructor(
		private router: Router,
		private videoPostService: VideoPostService,
		private toastController: ToastController
	 ) { }
 
	 ngOnInit() {
	 }
 
	 createPost(form: NgForm) {
		this.submitted = true;
 
		if (form.valid) {
			console.log("here", this.videoPost);
			this.videoPostService.create(this.videoPost).subscribe({
        next: data => {
            console.log("data", data);
        },
        error: error => {
					this.displayMessage(error.error.message);
					console.log("error", error);
        }
    	});
		}
	}


	async displayMessage(msg: string): Promise<void> {
		const toast = await this.toastController.create({
			message: msg,
			duration: 3000,
			// cssClass: 'custom-toast',
			buttons: [
				{
					text: 'Dismiss',
					role: 'cancel'
				}
			],
		});

		await toast.present();
	}
 
	loadImageFromDevice(event): void {
		
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.readAsDataURL(file);
		
		reader.onload = () => {
		console.log("reader.result", reader.result);
			this.videoPost.upload = reader.result;
		};
	
		reader.onerror = (error) => {
	
			//handle errors
	
		};
	};
}
