import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { UserData } from '../../services/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { MenuController, ToastController } from '@ionic/angular';
import { LoginService } from '../../services/login/login.service';
import { error } from '@angular/compiler/src/util';
import { Token } from '../../interfaces/Token/token';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    private userData: UserData,
    private router: Router,
    private storage: Storage,
    private menu: MenuController,
		private loginService: LoginService,
		private toastController: ToastController
  ) { }

  ngOnInit() {
   this.menu.enable(false);
  }

  async onLogin(form: NgForm): Promise<void> {
    this.submitted = true;
	
    if (form.valid) {
			this.loginService.login(form.value.username, form.value.password).subscribe({
        next: data => {
            console.log("data", data);
						this.storage.set("hasLoggedIn", true);
						this.storage.set(this.loginService.ACCESS_TOKEN, data.access_token)
						this.menu.enable(true);
						// this.router.navigate(['/app/brainr/dashboard']);
						this.router.navigateByUrl('/app/brainr/dashboard');
        },
        error: error => {
					this.displayMessage(error.error.message);
					console.log("error", error);
        }
    	});
    }
  }

  onSignup(): void {
    this.router.navigateByUrl('/signup');
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
