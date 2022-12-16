import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { API_BASE_URL } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';
import { VideoPost } from '../../../interfaces/posts/video-post';

@Injectable({
  providedIn: 'root'
})
export class VideoPostService {

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
		post: VideoPost
	): Observable<Object> {
		try {
			//TODO: Refactor calls to better more moderns standars
			return this.http.post<Object>(
				`${API_BASE_URL}/post/create/video`, 
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
