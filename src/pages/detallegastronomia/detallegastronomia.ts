import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestGrastronomiaProvider } from '../../providers/rest-grastronomia/rest-grastronomia';

/**
 * Generated class for the DetallegastronomiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallegastronomia',
  templateUrl: 'detallegastronomia.html',
})
export class DetallegastronomiaPage {
  public iddetalle;
  dataevento:any =[];
  Infoevento:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restgastronomia: RestGrastronomiaProvider) {
    this.iddetalle = navParams.get("iddetallegastronomia");
    this.getrestaurantes();
    this.getIdrestaurantes();
  }


  getrestaurantes() {
    this.restgastronomia.getImggastronomia(this.iddetalle)
    .then(data => {
      this.dataevento = data;
     
      console.log(this.dataevento);
    })
  }

  getIdrestaurantes() {
    this.restgastronomia.getDetalleGastronomiaId(this.iddetalle)
    .then(data1 => {
      this.Infoevento = data1;
     
      console.log(this.Infoevento);
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallegastronomiaPage');
  }

}
