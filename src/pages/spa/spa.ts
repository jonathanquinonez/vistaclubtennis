import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestSpaProvider } from '../../providers/rest-spa/rest-spa';

/**
 * Generated class for the SpaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spa',
  templateUrl: 'spa.html',
})
export class SpaPage {
  imgspa: any = [];
  idinfo: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restspaprovider:RestSpaProvider) {
  this.getimgspa();
  this.getinfospa();
  }

  getinfospa() {
    this.restspaprovider.getDetallespaId()
    .then(data => {
      this.idinfo = data;
     
      console.log(this.idinfo);
    })
  }
  getimgspa() {
    this.restspaprovider.getImgspa()
    .then(data => {
      this.imgspa = data;
     
      console.log(this.imgspa);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaPage');
  }

}
