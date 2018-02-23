import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestSalonesProvider } from '../../providers/rest-salones/rest-salones';
import { DetallesalonesPage } from '../detallesalones/detallesalones';

/**
 * Generated class for the SalonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salones',
  templateUrl: 'salones.html',
})
export class SalonesPage {
  salones:any= [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public restsalonesprovider:RestSalonesProvider) {
    this.getsalones();
  }

  getsalones() {
    this.restsalonesprovider.getSalones()
    .then(data => {
      this.salones = data;
     
      console.log(this.salones);
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
