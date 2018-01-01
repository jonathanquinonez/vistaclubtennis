import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  datateetime: any= Array();
  A: any= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restteetime: RestTeetimeProvider) {
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

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeetimePage');
  }

}
