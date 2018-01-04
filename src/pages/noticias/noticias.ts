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

    
    
  }

  getGastronimia() {
    this.restnoticiasprovider.getGastronomia()
    .then(data => {
      this.users = data;
     // this.users.$broadcast('scroll.infiniteScrollComplete');
      console.log(this.users);
    })
    
  }

  /**
 * Created by singhdi on 2014-07-26.
 */






  /*detallegastronomia(id){
    this.navCtrl.push(DetallenoticiaPage, {
      iddetallegastronomia: id,
    })
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

}
