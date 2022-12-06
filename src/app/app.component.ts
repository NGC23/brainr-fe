import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';
import { LoginService } from './providers/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	//class properties
	loggedIn = false; 
	dark = true; // dark theme toggle

	//Application sidemenu pages
  appPages = [
    {
     title: 'Dashboard',
     url: '/app/brainr/dashboard',
     icon: 'home'
    },
    {
      title: 'My Posts',
      url: '/app/brainr/posts',
      icon: 'folder-open'
    },
    {
     title: 'My feed',
     url: '/app/brainr/my-feed',
     icon: 'folder-open'
    },
    {
     title: 'Notifications',
     url: '/app/brainr/notifications',
     icon: 'mail'
    }
  ];

  //Testing
  user = {
   name: "Neil",
   lastName: "Clulow",
   LoggedInStatus: '',
   about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vestibulum sem, quis auctor mi fringilla in. Etiam eget vulputate odio. Duis id velit sed ligula blandit tincidunt. Cras porttitor posuere suscipit."
  };

  constructor(
    private menu: MenuController,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
		private loginService: LoginService
  ) {
  }

  async ngOnInit() {
		this.storage.get(this.loginService.HAS_LOGGED_IN).then(data => {
			this.loggedIn = data;
		});
  }


  logout() {
    this.userData.logout().then(() => {
      this.storage.remove("hasLoggedIn");
      return this.router.navigate(['/login']);
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
