import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public storage: Storage,
    private menu: MenuController
  ) { }

  ngOnInit() {
   this.menu.enable(false);
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.storage.set("hasLoggedIn", true);
      this.userData.login(this.login.username);
      this.menu.enable(true);
      this.router.navigateByUrl('/app/brainr/dashboard');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
