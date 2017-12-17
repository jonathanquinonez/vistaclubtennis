import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, AlertController,ToastController} from 'ionic-angular';

import { RestGrastronomiaProvider } from '../../providers/rest-grastronomia/rest-grastronomia';
/*import { RestProvider } from '../../providers/rest-gastronomia/rest-gastronomia';
/**
 * Generated class for the GastronomiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gastronomia',
  templateUrl: 'gastronomia.html',
})

export class GastronomiaPage {
  users: any = [];
  
  constructor(private alertController:AlertController,public navCtrl: NavController, public navParams: NavParams, public restgrastronomiaprovider: RestGrastronomiaProvider) {
    this.getGastronimia();
  }
 getGastronimia() {
    this.restgrastronomiaprovider.getGastronomia()
    .then(data => {
      this.users = data;
     
      console.log(this.users);
    })
  }


  getItems(ev) {
    // Reset items back to all of the items
    //this.getGastronimia();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.users.data = this.users.data.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val) > -1);
      })
    }else{

      this.getGastronimia();
    }
  }
  
  ionViewDidLoad() {

    console.log('ionViewDidLoad GastronomiaPage');
  }

}
