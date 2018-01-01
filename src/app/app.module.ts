import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//pages
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
import { DetallegastronomiaPage } from '../pages/detallegastronomia/detallegastronomia';
import { SalonesPage } from '../pages/salones/salones';
import { SpaPage } from '../pages/spa/spa';
import { ZonarecreativaPage } from '../pages/zonarecreativa/zonarecreativa';
import { DetallesalonesPage } from '../pages/detallesalones/detallesalones';
import { DetallezonarecreativaPage } from '../pages/detallezonarecreativa/detallezonarecreativa';
import { NoticiasPage } from '../pages/noticias/noticias';
import { DetallenoticiaPage } from '../pages/detallenoticia/detallenoticia';
import { PqrsPage } from '../pages/pqrs/pqrs';
import { DetalledeportePage } from '../pages/detalledeporte/detalledeporte';
import { PersonasautorizadasPage } from '../pages/personasautorizadas/personasautorizadas';
import { MisinvitacionesPage } from '../pages/misinvitaciones/misinvitaciones';
import { PagoHandicapPage } from '../pages/pago-handicap/pago-handicap';


//modales
import { SaborgourmetPage } from '../pages/saborgourmet/saborgourmet';
import { SugerenciaschefPage } from '../pages/sugerenciaschef/sugerenciaschef';


/// providers
import { UsersProvider } from '../providers/users/users';
import { RestGrastronomiaProvider } from '../providers/rest-grastronomia/rest-grastronomia';
import { RestInstalacionesProvider } from '../providers/rest-instalaciones/rest-instalaciones';
import { RestDeportesProvider } from '../providers/rest-deportes/rest-deportes';
import { RestEventosProvider } from '../providers/rest-eventos/rest-eventos';
import { RestTeetimeProvider } from '../providers/rest-teetime/rest-teetime';
import { RestMisinvitacionesProvider } from '../providers/rest-misinvitaciones/rest-misinvitaciones';
import { RestReservacionesProvider } from '../providers/rest-reservaciones/rest-reservaciones';
import { RestSalonesProvider } from '../providers/rest-salones/rest-salones';
import { RestZonarecreativaProvider } from '../providers/rest-zonarecreativa/rest-zonarecreativa';
import { RestSpaProvider } from '../providers/rest-spa/rest-spa';
import { RestNoticiasProvider } from '../providers/rest-noticias/rest-noticias';
import { RestPqrsProvider } from '../providers/rest-pqrs/rest-pqrs';
import { RestPersonasautorizadasProvider } from '../providers/rest-personasautorizadas/rest-personasautorizadas';

import { InAppBrowser } from '@ionic-native/in-app-browser';

///
//import  { PipeModule }    from './tools/PipeModule';


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
    ProfilePage,
    SaborgourmetPage,
    SugerenciaschefPage,
    DetallegastronomiaPage,
    SalonesPage,
    SpaPage,
    ZonarecreativaPage,
    DetallesalonesPage,
    DetallezonarecreativaPage,
    NoticiasPage,
    DetallenoticiaPage,
    PqrsPage,
    DetalledeportePage,
    PersonasautorizadasPage,
    MisinvitacionesPage,
    PagoHandicapPage
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
    ProfilePage,
    SaborgourmetPage,
    SugerenciaschefPage,
    DetallegastronomiaPage,
    SalonesPage,
    SpaPage,
    ZonarecreativaPage,
    DetallesalonesPage,
    DetallezonarecreativaPage,
    NoticiasPage,
    DetallenoticiaPage,
    PqrsPage,
    DetalledeportePage,
    PersonasautorizadasPage,
    MisinvitacionesPage,
    PagoHandicapPage
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
    RestMisinvitacionesProvider,
    RestReservacionesProvider,
    RestSalonesProvider,
    RestZonarecreativaProvider,
    RestSpaProvider,
    RestNoticiasProvider,
    RestPqrsProvider,
    RestPersonasautorizadasProvider,
    InAppBrowser
  ]
})
export class AppModule {}
