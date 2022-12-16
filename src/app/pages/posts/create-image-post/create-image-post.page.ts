import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ImagePost } from '../../../interfaces/posts/image-post';
import { ImagePostService } from '../../../services/post/image/image-post.service';

@Component({
  selector: 'app-create-image-post',
  templateUrl: './create-image-post.page.html',
  styleUrls: ['./create-image-post.page.scss'],
})
export class CreateImagePostPage implements OnInit {
	imagePost: ImagePost = { name: '', caption: '', tags: '', upload: '' };
	submitted = false;
 
	 constructor(
		private router: Router,
		private imagePostServuce: ImagePostService,
		private toastController: ToastController
	 ) { }
 
	 ngOnInit() {
	 }
 
	 createPost(form: NgForm) {
		this.submitted = true;
 
		if (form.valid) {
			console.log("here", this.imagePost);
			this.imagePostServuce.create(this.imagePost).subscribe({
        next: data => {
            console.log("data", data);
						this.router.navigateByUrl('/app/brainr/posts');
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
			this.imagePost.upload = reader.result;
		};
	
		reader.onerror = (error) => {
	
			//handle errors
	
		};
	};
}
