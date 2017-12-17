import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestEventosProvider } from '../../providers/rest-eventos/rest-eventos';
/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  eventos:any= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public resteventosprovider: RestEventosProvider) {
    this.getEventos();
  }
  getEventos() {
    this.resteventosprovider.getEventos()
    .then(data => {
      this.eventos = data;
     
      console.log(this.eventos);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

}
