import { Component, OnInit } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit{
  name: string;

  constructor(private navParams: NavParams) {}

  ngOnInit(){
    this.name = this.navParams.get('userName');
  }

}
