import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestPersonasautorizadasProvider } from '../../providers/rest-personasautorizadas/rest-personasautorizadas';
/**
 * Generated class for the PersonasautorizadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personasautorizadas',
  templateUrl: 'personasautorizadas.html',
})
export class PersonasautorizadasPage {
personas: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restpersonasautorizadas: RestPersonasautorizadasProvider) {
  this.getGastronimia();
  }

  getGastronimia() {
    this.restpersonasautorizadas.getpersonasautorizadas()
    .then(data => {
      this.personas = data;
     
      console.log(data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonasautorizadasPage');
  }

}
