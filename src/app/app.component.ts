import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule , HttpClient , HttpHeaders} from '@angular/common/http';

import { HomePage } from '../pages/home/home';
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
import { PqrsPage } from '../pages/pqrs/pqrs';
import { PagoHandicapPage } from '../pages/pago-handicap/pago-handicap';


import { UsersProvider } from '../providers/users/users';

import {AppSettings} from '../app/app.constants';
import { OneSignal } from '@ionic-native/onesignal';
import { User } from '../classes/User';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  currentUser: User;
  
    public datos: any;
   @ViewChild(Nav) nav: Nav;

  rootPage:any = MenuprincipalPage ;


  user: User;
  admin : User;
  public da : any;
  public nombre : any;
  public apellido : any;
  
  public imagen : any;
  public logeado :any;


  pages: Array<{title: string,icon:string, component: any,logout :boolean}>;
  pagest: Array<{title: string,icon:string, component: any,logout :boolean}>;
  constructor(public platform: Platform, 
    public statusBar: StatusBar,
    private oneSignal: OneSignal,
    public splashScreen: SplashScreen, 
    public menu: MenuController,
    private alertController:AlertController,
    public authService: UsersProvider,
    public http: HttpClient) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
     this.handlerNotifications();
      
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
            { title: 'Instalaciones',icon:'logo-codepen', component: InstalacionesPage , logout : false },
            { title: 'Eventos',icon:'ios-color-filter', component: EventosPage , logout : false },
            { title: 'Deportes',icon:'md-baseball', component: DeportesPage , logout : false },
            { title: 'Restaurant',icon:'md-restaurant', component: GastronomiaPage , logout : false },
            { title: 'Zona-Socios',icon:'md-cog', component: MenuPage , logout : false },
            { title: 'Paga en Linea',icon:'md-card', component: PagoHandicapPage , logout : false },
            { title: 'Pqrs',icon:'md-mail', component: PqrsPage , logout : false },
           { title: 'Logout',icon:'md-log-out', component: UserloginPage , logout : true }
    
        ];

        this.pagest = [
          { title: 'Inicio',icon:'home', component: MenuprincipalPage, logout : false },
          { title: 'Iniciar Sesion',icon:'md-person', component: UserloginPage , logout : false },
            { title: 'Instalaciones',icon:'logo-codepen', component: InstalacionesPage , logout : false },
            { title: 'Eventos',icon:'ios-color-filter', component: EventosPage , logout : false },
            { title: 'Deportes',icon:'md-baseball', component: DeportesPage , logout : false },
            { title: 'Restaurant',icon:'md-restaurant', component: GastronomiaPage , logout : false }
        ];
   
    
    
    
        // Verificación de logeo
          if(localStorage["User"] == null || localStorage["User"] == undefined){
              this.user = new User("Usuario Default", "");
              this.imagen = "assets/images/avatar.png";
        }
        else{
          this.logeado = true;
          this.user = (localStorage["User"]);
            AppSettings.datos =JSON.parse(localStorage["Datos"]);
             
              this.nombre = AppSettings.datos.nombre;
              this.apellido = AppSettings.datos.apellido;
              
              this.imagen = AppSettings.datos.avatar;
          
              console.log(this.imagen);
               console.log(AppSettings.datos);
          console.log('constans'+this.nombre+ 'apellido'+this.apellido);
        }
    
       
  }
  
private handlerNotifications(){
  if (this.platform.is('cordova')){
    this.oneSignal.startInit('cdc09357-f92a-4e2c-8bd3-b2d7cbf2a2c2', '667785379086');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationOpened()
    .subscribe(jsonData => {
      let alert = this.alertController.create({
        title: jsonData.notification.payload.title,
        subTitle: jsonData.notification.payload.body,
        buttons: ['OK']
      });
      alert.present();
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
    this.oneSignal.endInit();
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
          this.logeado = true;
         this.user = JSON.parse(localStorage["User"]);
          AppSettings.datos =JSON.parse(localStorage["Datos"]);
        console.log('despues de iniciar '+AppSettings.datos);
          this.nombre = AppSettings.datos.nombre;
          this.apellido = AppSettings.datos.apellido;
          
          this.imagen = AppSettings.datos.avatar;
         
 
        }
    }
  });

  // VERIFICACIÓN DE LOGEO 
  if(localStorage["User"] == null || localStorage["User"] == undefined){
    this.nav.setRoot(HomePage);
  }
  else{
    this.logeado = true;
    console.log('AQUI SE SI ESTA LOGEADO');
    this.user = JSON.parse(localStorage["User"]);
    AppSettings.datos = JSON.stringify(localStorage["Datos"]);
  console.log('despues de iniciar '+AppSettings.datos);
    this.nombre = AppSettings.datos.nombre;
    this.apellido = AppSettings.datos.apellido;
    
    this.imagen = AppSettings.datos.avatar;
     
    console.log('holaa'+this.imagen);
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
        this.nombre = "Usuario";
        this.apellido = "Invitado";
        
        this.logeado = false;
         this.nav.setRoot(page.component);
        }else{
        this.nav.push(page.component);
        }

    // navigate to the new page if it is not the current page
  
  }

  ionViewDidLoad() {
    if (localStorage["Datos"]){

         this.user = JSON.parse(localStorage["User"]);
          AppSettings.datos = JSON.stringify(localStorage["Datos"]);
        console.log('dsiempre '+AppSettings.datos);
         this.nombre = AppSettings.datos.nombre;
         this.apellido = AppSettings.datos.apellido;
         
         this.imagen = AppSettings.datos.avatar;
         
       
    }
 }
  

}

