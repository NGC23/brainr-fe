import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  constructor(
		private router: Router,
		private storage: Storage,
		private loginService: LoginService
	) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    console.log(route);
    let authenticated: boolean;
		
		await this.storage.get(this.loginService.HAS_LOGGED_IN).then(data => {
			authenticated = data;
		});

    if (!authenticated) {
			this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
