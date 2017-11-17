/**
 * Komponen yang digunakan untuk meng-inisialisasikan Application kita
 * Seperti Page,
 */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/**
* Inisialisasi Page yang akan kita butuhkan
*/
import { SplashmenuPage} from "../pages/splashmenu/splashmenu";
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BookedPage} from "../pages/booked/booked";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Importing AngularFireModule and the Credentials
 */
import {AngularFireModule} from 'angularfire2';
import {FIREBASE_CONFIG} from "./firebase.credentials";
import {AngularFireDatabaseModule} from "angularfire2/database";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    BookedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    BookedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
