import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserPage } from "../pages/user/user";
import {ProfilePage} from "../pages/user/profile/profile";
import {SettingsPage} from "../pages/settings/settings";
import {UpdateSettingPage} from "../pages/update-setting/update-setting";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    SettingsPage,
    ProfilePage,
    UpdateSettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    SettingsPage,
    ProfilePage,
    UpdateSettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
