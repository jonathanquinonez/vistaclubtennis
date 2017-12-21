import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule , HttpClient , HttpHeaders} from '@angular/common/http';

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


import { UsersProvider } from '../providers/users/users';

import {AppSettings} from '../app/app.constants';

import { User } from '../classes/User';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  currentUser: User;
  
    public datos: any;
   @ViewChild(Nav) nav: Nav;

  rootPage:any = GastronomiaPage;


  user: User;
  admin : User;
  public da : any;
  public nombre : any;
  public apellido : any;
  public puntos : any;
  public imagen : any;


  pages: Array<{title: string,icon:string, component: any,logout :boolean}>;
  constructor(public platform: Platform, 
    public statusBar: StatusBar,
    public splashScreen: SplashScreen, 
    public menu: MenuController,
    public authService: UsersProvider,
    public http: HttpClient) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
    this.initializeApp();
    
        // set our app's pages sin función.
        /*ESPAÑOL
        Este vector define el orden, icono y componente al que se va a dirigir.
        Tiene una caracteristica Logout para identificar el menu para salir de la aplicación
        INGLES
        This vector defines the order, icon and component to be addressed.
        It has a Logout feature to identify the menu to exit the application*/
        this.pages = [
          { title: 'Inicio',icon:'home', component: MenuprincipalPage, logout : false },
          { title: 'Perfil de Usuario',icon:'md-person', component: ProfilePage , logout : false },
           { title: 'Tee-Time',icon:'md-cog', component: TeetimePage , logout : false },
            { title: 'Instalaciones',icon:'logo-codepen', component: InstalacionesPage , logout : false },
            { title: 'Eventos',icon:'ios-color-filter', component: EventosPage , logout : false },
            { title: 'Deportes',icon:'md-baseball', component: DeportesPage , logout : false },
            { title: 'Restaurant',icon:'md-restaurant', component: GastronomiaPage , logout : false },
          { title: 'Logout',icon:'md-log-out', component: UserloginPage , logout : true }
    
        ];
    
    
    
        // Verificación de logeo
          if(localStorage["User"] == null || localStorage["User"] == undefined){
              this.user = new User("Usuario Default", "");
              this.imagen = "assets/images/avatar.png";
        }
        else{
          
          this.user = JSON.parse(localStorage["User"]);
             AppSettings.datos = JSON.parse(localStorage["Datos"]);
             
              this.nombre = AppSettings.datos.nombre;
              this.apellido = AppSettings.datos.apellido;
              this.puntos = AppSettings.datos.puntos;      
              this.imagen = AppSettings.datos.avatar;
          
              console.log(this.imagen);
               console.log(AppSettings.datos);
          console.log('constans'+this.nombre+ 'apellido'+this.apellido+'puntos'+this.puntos);
        }
    
    
  }
  
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
         var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  /*window["plugins"].OneSignal
    .startInit("f93e9465-214d-4795-ace2-b0607c946f7b", "258118657186")
  	.handleNotificationOpened(notificationOpenedCallback)
    .endInit();
*/
      
    });
  }

  //error aqui
 ngAfterViewInit() {
  this.nav.viewDidEnter.subscribe((data) => {
    var view = data.component.name;
    if(view != "IntroductionPage" && view != "UserSignup" && view != "UserLogin"){
      
        // VERIFICACIÓN DE LOGEO 
        if(localStorage["User"] == null || localStorage["User"] == undefined){
         this.user = new User("Usuario Default", "");
          this.imagen = "assets/images/avatar.png";
          //this.nav.setRoot(IntroductionPage);
        }
        else{
          this.user = JSON.parse(localStorage["User"]);
          AppSettings.datos = JSON.parse(localStorage["Datos"]);
        console.log('despues de iniciar '+AppSettings.datos);
          this.nombre = AppSettings.datos.nombre;
          this.apellido = AppSettings.datos.apellido;
          this.puntos = AppSettings.datos.puntos;
          this.imagen = AppSettings.datos.avatar;
         
 
        }
    }
  });

  // VERIFICACIÓN DE LOGEO 
  if(localStorage["User"] == null || localStorage["User"] == undefined){
    this.nav.setRoot(HomePage);
  }
  else{
    this.user = JSON.parse(localStorage["User"]);
    AppSettings.datos = JSON.parse(localStorage["Datos"]);
  console.log('despues de iniciar '+AppSettings.datos);
    this.nombre = AppSettings.datos.nombre;
    this.apellido = AppSettings.datos.apellido;
    this.puntos = AppSettings.datos.puntos;
    this.imagen = AppSettings.datos.avatar;
     
    console.log('hola'+this.imagen);
    this.nav.setRoot(MenuprincipalPage);
  }
  
}

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();

/* Español
si el atributo logout is true .. borramos los datos del usuario del telefono
INGLES
If the logout attribute is true .. we delete the user data from the phone  */
      if(page.logout ){
        window.localStorage.removeItem('User');
        window.localStorage.removeItem('Datos');
        window.localStorage.removeItem('datos');
         this.nav.setRoot(page.component);
        }else{
        this.nav.push(page.component);
        }

    // navigate to the new page if it is not the current page
  
  }

  ionViewDidLoad() {
    if (localStorage["Datos"]){

         this.user = JSON.parse(localStorage["User"]);
          AppSettings.datos = JSON.parse(localStorage["Datos"]);
        console.log('dsiempre '+AppSettings.datos);
         this.nombre = AppSettings.datos.nombre;
         this.apellido = AppSettings.datos.apellido;
         this.puntos = AppSettings.datos.puntos;
         this.imagen = AppSettings.datos.avatar;
         
       
    }
 }
  

}

