import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UpdateSettingPage} from "../update-setting/update-setting";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  name: string;
  phone: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  updateAName(name: string){
    this.navCtrl.push(UpdateSettingPage, {userName: name});
  }

  updateAPhone(phone: string){
    this.navCtrl.push(UpdateSettingPage, {userPhone: phone});
  }

  updateASetting(){
    this.navCtrl.push(UpdateSettingPage);
  }

}
