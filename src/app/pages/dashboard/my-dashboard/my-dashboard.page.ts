import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DashboardPopoverPage } from '../dashboard-popover/dashboard-popover';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.page.html',
  styleUrls: ['./my-dashboard.page.scss'],
})
export class MyDashboardPage implements OnInit {
 location = 'madison';
 conferenceDate = '2047-05-17';

 selectOptions = {
   header: 'Select a Location'
 };

 //Testing
 user = {
  name: "Neil",
  lastName: "Clulow",
  LoggedInStatus: true,
  about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vestibulum sem, quis auctor mi fringilla in. Etiam eget vulputate odio. Duis id velit sed ligula blandit tincidunt. Cras porttitor posuere suscipit."
 };

 constructor(
  public popoverCtrl: PopoverController,  
  private storage: Storage
  ) { }


  ngOnInit() {
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: DashboardPopoverPage,
      event
    });
    await popover.present();
  }

}
