import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestEventosProvider } from '../../providers/rest-eventos/rest-eventos';
/**
 * Generated class for the DetalleeventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalleevento',
  templateUrl: 'detalleevento.html',
})
export class DetalleeventoPage {
  public idEvento;
  dataevento:any =[];
  Infoevento:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public resteventosprovider: RestEventosProvider) {
    this.idEvento = navParams.get("idEvento");
    //this.iddetalleevento();
    this.getEventos();
   this.getIdEventos();
  }

  ///////// envio variable id a rest-eventos - para consultar el detalle dle evento
  /*iddetalleevento(){
    this.navParams.data(RestEventosProvider, {
      idEvento: this.idEvento,
    })
  }*/

   //// consulta todos los eventos 
   getEventos() {
    this.resteventosprovider.getDetalleEvento(this.idEvento)
    .then(data => {
      this.dataevento = data;
     
      console.log(this.dataevento);
    })
  }

  getIdEventos() {
    this.resteventosprovider.getEventoId(this.idEvento)
    .then(data1 => {
      this.Infoevento = data1;
     
      console.log(this.Infoevento);
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleeventoPage');
  }

}
