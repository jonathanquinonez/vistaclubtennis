import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController  } from 'ionic-angular';

import { JugadoresTennisPage } from '../jugadores-tennis/jugadores-tennis';
import { RestReservacionesProvider } from '../../providers/rest-reservaciones/rest-reservaciones';

/**
 * Generated class for the MisreservacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-misreservaciones',
  templateUrl: 'misreservaciones.html',
})
export class MisreservacionesPage {
  datateetime:any = [];
  testRadioOpen: boolean;
  testRadioResult;
  buttonDisabled:any;
  constructor( public ert: AlertController,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, public restreservaciones:RestReservacionesProvider) {
    console.log( localStorage.getItem('User'))
    console.log( localStorage.getItem('Datos'))
    this.getTeetime();
  }

  //// consulta todos los usuarios autorizados al teetime de ese usuario
 getTeetime() {
  this.restreservaciones.getTeetimetennis()
  .then(datos => {
    this.datateetime = datos;
   
 
    console.log((datos));
  })
}
deletedbloque(idbloque) {
  let alert = this.ert.create();
  alert.setTitle('Eliminar Reservación');

  this.testRadioOpen = false;
  alert.addButton('Cancelar');
  alert.addButton({
    text: 'Eliminar',
    cssClass: 'eliminarbt',
    handler: data => {

      this.restreservaciones.deletedbloque(idbloque)
      .then(datos => {
        this.datateetime = datos;
       
     
        console.log(datos);
        console.log(idbloque);
        this.getTeetime();
      })

      
      
      
    }
  });
  alert.present();

}

  menu(){
    this.navCtrl.push(JugadoresTennisPage);
   }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MisreservacionesPage');
  }

}
