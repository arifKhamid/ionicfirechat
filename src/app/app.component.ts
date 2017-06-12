import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    let config = {
    apiKey: "AIzaSyBBicwFshZkegU9uRO9IIi5ZAAIIpglXnM",
    authDomain: "chatfb-6cc99.firebaseapp.com",
    databaseURL: "https://chatfb-6cc99.firebaseio.com",
    projectId: "chatfb-6cc99",
    storageBucket: "chatfb-6cc99.appspot.com",
    messagingSenderId: "611600962224"
  };
  firebase.initializeApp(config);

  }
}

