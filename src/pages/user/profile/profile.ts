import { Component, OnInit } from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit{
  name: string;

  constructor(private navParams: NavParams, private navCtrl: NavController) {}

  ngOnInit(){
    this.name = this.navParams.get('userName');
  }

  onGoBack(){
    /* removes the pag at the very top */
    // this.navCtrl.pop();
    /* Pops off and remvoes all pages beside the root page which is defined in the app.module */
    this.navCtrl.popToRoot();
  }

}
