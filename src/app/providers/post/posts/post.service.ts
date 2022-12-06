import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../../domain/posts/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 data: any;

 constructor(private http: HttpClient) {}

 async getPosts(): Promise<any> {
  return fetch("../../../assets/data/data.json").then(res=>res.json()).then(json=>{
   return json.posts;
   //DO YOUR STAFF
  });
 }

 processData(data: any) {
   // just some good 'ol JS fun with objects and arrays
   // build up the data by linking speakers to sessions
   this.data = data;

   // loop through each day in the schedule
   this.data.schedule.forEach((day: any) => {
     // loop through each timeline group in the day
     day.groups.forEach((group: any) => {
       // loop through each session in the timeline group
       group.sessions.forEach((session: any) => {
         session.speakers = [];
         if (session.speakerNames) {
           session.speakerNames.forEach((speakerName: any) => {
             const speaker = this.data.speakers.find(
               (s: any) => s.name === speakerName
             );
             if (speaker) {
               session.speakers.push(speaker);
               speaker.sessions = speaker.sessions || [];
               speaker.sessions.push(session);
             }
           });
         }
       });
     });
   });

   return this.data;
 }

}
