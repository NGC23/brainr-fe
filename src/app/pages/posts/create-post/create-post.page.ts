import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../../providers/user-data';
import { UserOptions } from '../../../interfaces/user-options';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

 signup: UserOptions = { username: '', password: '' };
 submitted = false;

  constructor(
   private router: Router,
   private userData: UserData
  ) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
   this.submitted = true;

   if (form.valid) {
     this.userData.signup(this.signup.username);
     this.router.navigateByUrl('/app/tabs/schedule');
   }
 }

}
