import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

	constructor(
		public http: HttpClient
	) { }

	signUp(
		email: string, 
		name: string, 
		password: string
	): Observable<Object> {
		try {
			return this.http.post<Object>(
				API_BASE_URL + 'sign-up', 
				{
					email: email,
					password: password,
					name: name
				}
			);
		} catch (error) {
			throw new Error("Error on login");
		}
	}
}
