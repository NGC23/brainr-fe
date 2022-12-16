import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Storage } from '@ionic/storage';
import { API_BASE_URL } from '../../../../environments/environment';
import { error } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

	token: '';
	data: any;

  constructor(
		private http: HttpClient,
		private storage: Storage,
		private loginService: LoginService
	) { 
	}

	async getPosts():  Promise<Observable<any>> {

	await this.storage.get(this.loginService.ACCESS_TOKEN).then(data => {
		console.log("token", data);
		this.token = data;	
	});

  return this.http.get<any>(`${API_BASE_URL}/posts`,{
		headers: {
			"Authorization": `Bearer ${this.token}`
		}
	});        
 }

}
