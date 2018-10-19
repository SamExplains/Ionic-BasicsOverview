import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserPage} from "../user/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showUsers(){
    this.navCtrl.push(UserPage);
  }

}
