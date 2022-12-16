import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { LoadingController, MenuController, Platform, ToastController } from '@ionic/angular';

import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

import { Storage } from '@ionic/storage';

import { UserData } from './services/user-data';
import { LoginService } from './services/login/login.service';

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
	currentRoute = "";
	//Testing
	user = {
		name: "Neil",
		lastName: "Clulow",
		LoggedInStatus: '',
		about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vestibulum sem, quis auctor mi fringilla in. Etiam eget vulputate odio. Duis id velit sed ligula blandit tincidunt. Cras porttitor posuere suscipit."
	};

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

	// Sets initial value to true to show loading spinner on first load
	loading = true

  constructor(
    private menu: MenuController,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
		private loginService: LoginService,
		private loadingCtrl: LoadingController
  ) {
  }

  async ngOnInit() {
		
			//Routing event listners in App
		this.router.events.subscribe(async (event: Event) => {
        if (event instanceof NavigationStart) {
						const loading = await this.loadingCtrl.create({
							message: 'Loading...',
							duration: 1000,
							spinner: 'circles',
						});
            // Show progress spinner or progress bar
						this.loading = true
						loading.present();
            console.log('Route change detected');
        }

        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
						this.loading = false
            this.currentRoute = event.url;          
            console.log("how ? ",event);
        }

        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar
						 this.loading = false
            // Present error to user
            console.log(event.error);
        }
    });

		SplashScreen.show({
			autoHide: false,
		});

		await this.storage.get(this.loginService.HAS_LOGGED_IN).then(data => {
			this.loggedIn = data;
		});
  }


  logout() {
    this.userData.logout().then(() => {
      this.storage.remove(this.loginService.HAS_LOGGED_IN);
      this.storage.remove(this.loginService.ACCESS_TOKEN);
      return this.router.navigate(['/login'],);
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
