import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProfilePage } from "./profile/profile";

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(private navCtrl: NavController) {}

  onLoadUser(name: string){
    this.navCtrl.push(ProfilePage, {userName: name});
  }


}
