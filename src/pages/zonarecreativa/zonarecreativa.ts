import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestInstalacionesProvider } from '../../providers/rest-instalaciones/rest-instalaciones';
import { DetallesalonesPage } from '../detallesalones/detallesalones';
/**
 * Generated class for the ZonarecreativaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zonarecreativa',
  templateUrl: 'zonarecreativa.html',
})
export class ZonarecreativaPage {
  salones:any= [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public restsalonesprovider:RestInstalacionesProvider) {
    this.getsalones();
  }

  getsalones() {
    this.restsalonesprovider.getInstalaciones()
    .then(data => {
      this.salones = data;
     
      console.log(data);
    })
  }

 detallesalon(id){
    this.navCtrl.push(DetallesalonesPage, {
      idsalon: id,
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonesPage');
  }

}
