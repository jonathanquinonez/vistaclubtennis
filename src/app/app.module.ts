import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AutorizaraccesoPage } from '../pages/autorizaracceso/autorizaracceso';
import { TeetimePage } from '../pages/teetime/teetime';
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { MisreservacionesPage } from '../pages/misreservaciones/misreservaciones';
import { MenuPage } from '../pages/menu/menu';
import { UserloginPage } from '../pages/userlogin/userlogin';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AutorizaraccesoPage,
    TeetimePage,
    JugadoresPage,
    MisreservacionesPage,
    MenuPage,
    UserloginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AutorizaraccesoPage,
    TeetimePage,
    JugadoresPage,
    MisreservacionesPage,
    MenuPage,
    UserloginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
