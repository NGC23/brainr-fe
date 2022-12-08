import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 data: any;

 constructor(private http: HttpClient) {}

 async getPosts(): Promise<any> {
  return fetch("../../../assets/data/data.json")
	.then( res => res.json() )
	.then( json => {
  	return json.posts;
  });
 }

}
