import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController, ViewController } from 'ionic-angular';
import { JugadoresPage } from '../jugadores/jugadores';

import { RestTeetimeProvider } from '../../providers/rest-teetime/rest-teetime';


/**
 * 
/**
 * Generated class for the TeetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teetime',
  templateUrl: 'teetime.html',
})
export class TeetimePage {
state:any;
  datateetime: any= Array();
  A: any= [];
  testRadioOpen: boolean;
  testRadioResult;
  buttonDisabled:any;
  myDate = '12:0:0';
  myDate2 = new Date();

  constructor( public ert: AlertController,public viewCtrl: ViewController ,public navCtrl: NavController, public navParams: NavParams, public restteetime: RestTeetimeProvider) {
    console.log( localStorage.getItem('User'))
    console.log( localStorage.getItem('Datos'))
    this.getTeetime();
    this.habilitar();
    this.datatamaño();
    
  }
  datatamaño(){
     if(this.datateetime.length ==0){
       return true;
     }else{
       return false;
     }
  }
  jugadores(){
    this.navCtrl.push(JugadoresPage);
  }

  //// consulta todos los usuarios autorizados al teetime de ese usuario
 getTeetime() {
    this.restteetime.getTeetime()
    .then(datos => {
      this.datateetime = datos;
     
   
      console.log((datos));
    })
  }

    //// consulta todos los usuarios autorizados al teetime de ese usuario
 deletedbloque(idbloque) {
  let alert = this.ert.create();
  alert.setTitle('Eliminar Reservación');

  this.testRadioOpen = false;
  alert.addButton('Cancelar');
  alert.addButton({
    text: 'Eliminar',
    cssClass: 'eliminarbt',
    handler: data => {

      this.restteetime.deletedbloque(idbloque)
      .then(datos => {
        this.datateetime = datos;
       
     
        console.log(datos);
        console.log(idbloque);
        this.getTeetime();
      })

      
      
      
    }
  });
  alert.present();

}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeetimePage');
  }

//// habilitar boton de reservaciones - uno por dia

habilitar(){
  var f=new Date();
  var cad=f.getHours()+":"+f.getMinutes()+":"+f.getSeconds(); 
  //this.myDate.setHours(12, 0, 0);

 console.log(this.myDate);
 console.log(cad);

if(cad == '3:50:0'){
  this.buttonDisabled = false;
  console.log('entro al false');
  // return false;
}else{
  this.buttonDisabled = false;
  console.log('entro al true');
 // return true;
}
 
 

}

}
