import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AutorizaraccesoPage } from '../pages/autorizaracceso/autorizaracceso';
import { TeetimePage } from '../pages/teetime/teetime';
import { MisreservacionesPage } from '../pages/misreservaciones/misreservaciones';
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { MenuPage } from '../pages/menu/menu';
import { UserloginPage } from '../pages/userlogin/userlogin';
import { MenuprincipalPage } from '../pages/menuprincipal/menuprincipal';
import { UsersProvider } from '../providers/users/users';


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
  }
}

