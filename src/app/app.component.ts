/**
 + Kita nggak akan bermain-main pada Component ini. TITIK
 * Karena itu udah Defaultnya seperti ini dan kita nggak akan mengutak-atiknya
 * Kecuali jika dibutuhkan :D
 */
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Kita akan meng-Import this funcking SplashScreenMenu
import { SplashmenuPage} from "../pages/splashmenu/splashmenu";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  /**
   * Meluncurkan SplashScreenMenu pertama kali oleh si Aplikasinya
   * @type {SplashmenuPage}
   */
  rootPage:any = SplashmenuPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.show();
    });
  }
}
