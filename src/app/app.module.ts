import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
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
import { MenuprincipalPage } from '../pages/menuprincipal/menuprincipal';
import { GastronomiaPage } from '../pages/gastronomia/gastronomia';
import { InstalacionesPage } from '../pages/instalaciones/instalaciones';
import { DeportesPage } from '../pages/deportes/deportes';
import { EventosPage } from '../pages/eventos/eventos';
import { DetalleeventoPage } from '../pages/detalleevento/detalleevento';
import { ProfilePage } from '../pages/profile/profile';

import { UsersProvider } from '../providers/users/users';
import { RestGrastronomiaProvider } from '../providers/rest-grastronomia/rest-grastronomia';
import { RestInstalacionesProvider } from '../providers/rest-instalaciones/rest-instalaciones';
import { RestDeportesProvider } from '../providers/rest-deportes/rest-deportes';
import { RestEventosProvider } from '../providers/rest-eventos/rest-eventos';
import { RestTeetimeProvider } from '../providers/rest-teetime/rest-teetime';
import { RestMisinvitacionesProvider } from '../providers/rest-misinvitaciones/rest-misinvitaciones';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AutorizaraccesoPage,
    TeetimePage,
    JugadoresPage,
    MisreservacionesPage,
    MenuPage,
    UserloginPage,
    MenuprincipalPage,
    GastronomiaPage,
    InstalacionesPage,
    DeportesPage,
    EventosPage,
    DetalleeventoPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule 

    
   
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
    UserloginPage,
    MenuprincipalPage,
    GastronomiaPage,
    InstalacionesPage,
    DeportesPage,
    EventosPage,
    DetalleeventoPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    RestGrastronomiaProvider,
    RestInstalacionesProvider,
    RestDeportesProvider,
    RestEventosProvider,
    HttpClientModule,
    RestTeetimeProvider,
    RestMisinvitacionesProvider 
  ]
})
export class AppModule {}
