import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestSalonesProvider } from '../../providers/rest-salones/rest-salones';

/**
 * Generated class for the DetallesalonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallesalones',
  templateUrl: 'detallesalones.html',
})
export class DetallesalonesPage {
  public idsalon;
  datasalon:any =[];
  Infosalon:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restsalonesprovider: RestSalonesProvider) {
  this.idsalon = navParams.get("idsalon");
  this.getInfoSalon();
  this.getImgSalon();
  }
  getImgSalon() {
    this.restsalonesprovider.getImgsalon(this.idsalon)
    .then(data => {
      this.datasalon = data;
     
      console.log(this.datasalon);
    })
  }

  getInfoSalon() {
    this.restsalonesprovider.getDetalleSalonId(this.idsalon)
    .then(data1 => {
      this.Infosalon = data1;
     
      console.log(this.Infosalon);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesalonesPage');
  }

}
