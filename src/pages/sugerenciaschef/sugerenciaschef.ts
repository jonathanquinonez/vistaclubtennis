import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';

/**
 * Generated class for the SugerenciaschefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sugerenciaschef',
  templateUrl: 'sugerenciaschef.html',
})
export class SugerenciaschefPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SugerenciaschefPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
