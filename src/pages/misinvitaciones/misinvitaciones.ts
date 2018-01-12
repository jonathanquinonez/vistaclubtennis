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
  public estado=0;
  personas: any = [];
  eliminado:any=[];
  testRadioOpen: boolean;
  testRadioResult:any=[];

  idinvitado:any=[];
  idinvitado1:any=[];
  constructor(  public navCtrl: NavController, public navParams: NavParams, public restpersonasautorizadas1: RestMisinvitacionesProvider, public ert: AlertController) {
  this.getGastronimia();
  
  }
  showRadio() {
    this.getidinvitado();
    console.log(this.idinvitado);
    let alert = this.ert.create();
    alert.setTitle('Nueva Invitación');

    alert.addInput({
     name:'nombre',
      type: 'text',
      placeholder: 'Nombre completo',
      value:this.testRadioResult,
      checked: true
    });
    alert.addInput({
      name:'identificacion',
      type: 'text',
      placeholder: 'Cedula',
      value: '',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Invitar',
      handler: data => {
        if(data !== undefined){

          this.restpersonasautorizadas1.personasautorizadas(data.identificacion,data.nombre,this.estado,this.idinvitado)
          .then(data1 => {
            this.testRadioResult = data1;
           
            console.log(data);
          })
          
          this.getGastronimia();
        }else{return false;}
       
        
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

   getidinvitado(){
    this.restpersonasautorizadas1.getidinvitado()
    .then(data2 => {
      this.idinvitado = data2;
     this.idinvitado = this.idinvitado.data;
      console.log(this.idinvitado);
    }) 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MisinvitacionesPage');
  }
  autorizaracceso(){
    this.navCtrl.push(AutorizaraccesoPage);}


    deletedbloque(idbloque) {
      console.log(idbloque);
      let alert = this.ert.create();
      alert.setTitle('Eliminar Reservación');
    
      this.testRadioOpen = false;
      alert.addButton('Cancelar');
      alert.addButton({
        text: 'Eliminar',
        cssClass: 'eliminarbt',
        handler: data => {
    
          this.restpersonasautorizadas1.deleted(idbloque)
          .then(datos => {
            this.eliminado= datos;
           
          
            console.log(datos);
          
            this.getGastronimia();
          })
    
          
          
          
        }
      });
      alert.present();
    
    }
      

}
