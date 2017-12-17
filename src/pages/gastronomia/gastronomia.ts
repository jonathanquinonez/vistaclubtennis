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
    this.getUsers();
  }
 getUsers() {
    this.restgrastronomiaprovider.getUsers()
    .then(data => {
      this.users = data;
     
      console.log(this.users);
    }/*, error=>{
      
      let alert = this.alertController.create({
        title:'Problemas al consultar la información', 
        subTitle:error.message,
        buttons:['OK']
      });
      alert.present();
      this.navCtrl.pop();
      console.log(error);
    }*/)
  }
  
  ionViewDidLoad() {

    console.log('ionViewDidLoad GastronomiaPage');
  }

}
