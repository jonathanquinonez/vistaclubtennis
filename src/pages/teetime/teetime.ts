import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController, ViewController } from 'ionic-angular';
import { JugadoresPage } from '../jugadores/jugadores';

import { RestTeetimeProvider } from '../../providers/rest-teetime/rest-teetime';


/**
 * 
/**
 * Generated class for the TeetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teetime',
  templateUrl: 'teetime.html',
})
export class TeetimePage {
state:any;
  datateetime: any= Array();
  A: any= [];
  testRadioOpen: boolean;
  testRadioResult;
  constructor( public ert: AlertController,public viewCtrl: ViewController ,public navCtrl: NavController, public navParams: NavParams, public restteetime: RestTeetimeProvider) {
    console.log( localStorage.getItem('User'))
    console.log( localStorage.getItem('Datos'))
    this.getTeetime();
  }

  jugadores(){
    this.navCtrl.push(JugadoresPage);
  }

  //// consulta todos los usuarios autorizados al teetime de ese usuario
 getTeetime() {
    this.restteetime.getTeetime()
    .then(datos => {
      this.datateetime = datos;
     
   
      console.log((datos));
    })
  }

    //// consulta todos los usuarios autorizados al teetime de ese usuario
 deletedbloque(idbloque) {
  let alert = this.ert.create();
  alert.setTitle('Eliminar Reservación');

  this.testRadioOpen = false;
  alert.addButton('Cancelar');
  alert.addButton({
    text: 'Eliminar',
    cssClass: 'eliminarbt',
    handler: data => {

      this.restteetime.deletedbloque(idbloque)
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
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeetimePage');
  }

}
