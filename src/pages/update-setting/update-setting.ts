import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpdateSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-setting',
  templateUrl: 'update-setting.html',
})
export class UpdateSettingPage implements OnInit{
  name: string;
  phone:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateSettingPage');
  }

  ngOnInit(){
    this.name = this.navParams.get('userName');
    this.phone = this.navParams.get('userPhone');
  }

  backToHome(){
    this.navCtrl.popToRoot();
  }

}
