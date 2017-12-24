import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallenoticiaPage } from '../detallenoticia/detallenoticia';

import { RestNoticiasProvider } from '../../providers/rest-noticias/rest-noticias';
/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  users: any = [];
  iddetalle:any;
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restnoticiasprovider: RestNoticiasProvider) {
    this.getGastronimia();
    for (let i = 0; i < 30; i++) {
      this.users.push( this.users.data );
    }
    console.log("mirar"+this.users.current_page);
  }

  getGastronimia() {
    this.restnoticiasprovider.getGastronomia()
    .then(data => {
      this.users = data;
     
      console.log(this.users);
    })
  }


  
   
  
    doInfinite(infiniteScroll) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        for (let i = 0; i < 30; i++) {
          this.items.push( this.items.length );
        }
  
        console.log('Async operation has ended');
        infiniteScroll.complete();
      }, 500);
    }
  









  /*detallegastronomia(id){
    this.navCtrl.push(DetallenoticiaPage, {
      iddetallegastronomia: id,
    })
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

}
