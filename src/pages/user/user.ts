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
    this.navCtrl.push(ProfilePage, {userName: name})
      .catch( (error) => console.log('Access denied' + error) );
  }

  ionViewCanEnter() :boolean | Promise<void>{
    console.log('ionViewCanEnter');
    const rnd = Math.random();
    return rnd > 0.5;
  }


  ionViewWillEnter(){
    console.log('ionViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter')
  }

  ionViewCanLeave(): boolean | Promise<void>{
  console.log('ionViewCanLeave');
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve();
    }, 1000)
  });

  }


}
