import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestDeportesProvider } from '../../providers/rest-deportes/rest-deportes';
/**
 * Generated class for the DetalledeportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalledeporte',
  templateUrl: 'detalledeporte.html',
})
export class DetalledeportePage {
  public iddetalle;
  dataevento1:any = [];
  Infoevento1:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restdeporte: RestDeportesProvider) {
    this.iddetalle = navParams.get("iddetalledeporte");
    this.getdeporte();
    this.getIddeporte();
  }


  getdeporte() {
    this.restdeporte.getImgdeporte(this.iddetalle)
    .then(data => {
      this.dataevento1 = data;
     
      console.log(data);
    })
  }

  getIddeporte() {
    this.restdeporte.getDetalledeporteId(this.iddetalle)
    .then(data1 => {
      this.Infoevento1 = data1;
     
      console.log(data1);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalledeportePage');
  }

}
