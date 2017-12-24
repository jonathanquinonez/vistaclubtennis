import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AutorizaraccesoPage } from '../autorizaracceso/autorizaracceso';
import { RestMisinvitacionesProvider } from '../../providers/rest-misinvitaciones/rest-misinvitaciones';

/**
 * Generated class for the MisinvitacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-misinvitaciones',
  templateUrl: 'misinvitaciones.html',
})
export class MisinvitacionesPage {

  personas: any = [];
  testRadioOpen: boolean;
  testRadioResult;
  constructor(  public navCtrl: NavController, public navParams: NavParams, public restpersonasautorizadas1: RestMisinvitacionesProvider, public ert: AlertController) {
  this.getGastronimia();
  }
  showRadio() {
    let alert = this.ert.create();
    alert.setTitle('Nueva Invitación');

    alert.addInput({
      type: 'text',
      placeholder: 'Nombre completo',
      value: '',
      checked: true
    });
    alert.addInput({
      type: 'text',
      placeholder: 'Cedula',
      value: '',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Invitar',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

  getGastronimia() {
    this.restpersonasautorizadas1.getpersonasautorizada()
    .then(data => {
      this.personas = data;
     
      console.log(data);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MisinvitacionesPage');
  }
  autorizaracceso(){
    this.navCtrl.push(AutorizaraccesoPage);}

}
