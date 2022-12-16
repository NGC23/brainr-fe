import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../../environments/environment';
import { ImagePost } from '../../../interfaces/posts/image-post';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ImagePostService {

	token: '';

  constructor(
		private http: HttpClient,
		private storage: Storage,
		loginService: LoginService
	) { 
			//TODO: Refactor this into a service when abstracting client
			storage.get(loginService.ACCESS_TOKEN).then(data => {
				this.token = data;	
			});
	}

	create(
		post: ImagePost
	): Observable<Object> {
		try {
			//TODO: Refactor calls to better more moderns standars
			return this.http.post<Object>(
				`${API_BASE_URL}/post/create/image`, 
				{
					name: post.name,
					caption: post.caption,
					tags: post.tags,
					upload: post.upload,
				},
				{
					headers: {
						"Authorization": `Bearer ${this.token}`
					}
				}
			);
		} catch (error) {
			console.error("Error on creating post");
			throw new Error("Error on creating post");
		}
	}
	
}
