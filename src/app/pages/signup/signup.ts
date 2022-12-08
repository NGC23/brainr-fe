import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../services/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { MenuController, ToastController } from '@ionic/angular';
import { SignUpService } from '../../services/sign-up/sign-up.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', email: '',  password: '' };
  submitted = false;

  constructor(
    private router: Router,
		private signUpService: SignUpService,
		private menu: MenuController,
		private toastController: ToastController
  ) {}

	ngOnInit() {
		this.menu.enable(false);
	 }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.signUpService.signUp(
				this.signup.username, 
				this.signup.email, 
				this.signup.password
			).subscribe({
        next: data => {
            console.log("data", data);
						this.router.navigateByUrl('/');
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
}
