import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/internal/Observable';
import { API_BASE_URL } from '../../../environments/environment';
import { Token } from '../../interfaces/Token/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
	ACCESS_TOKEN = 'access_token';
	HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(
		private http: HttpClient,
		private storage: Storage
	) { }

	login(
		email: string, 
		password: string
	): Observable<Token> {
		try {
			return this.http.post<Token>(
				API_BASE_URL + 'login', 
				{
					email: email,
					password: password
				}
			);
		} catch (error) {
			throw new Error("Error on login");
		}
	}
}
