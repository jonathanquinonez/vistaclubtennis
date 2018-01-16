import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController,ToastController, ActionSheetController  } from 'ionic-angular';

import { AppSettings } from "../../app/app.constants";
import { UsersProvider } from '../../providers/users/users';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  usuario: any = {
  identificacion:'x',
  nombre:'',
  apellido:'',
  direccion:'',
correo_electronico:'',
telefono:'',
imagen:'',
_method:'put',
}

foto: string = null;
test :any;
datos:any;
  constructor( private camera: Camera,public navparams:NavParams, private alertController:AlertController,public navCtrl: NavController,public authService:UsersProvider,private loadingController:LoadingController, private toastCtrl: ToastController,public actionSheetController: ActionSheetController) {
  var mystorage = JSON.parse(localStorage["Datos"])
       this.datos =  mystorage
       this.usuario.identificacion = this.datos.identificacion;
       this.usuario.nombre = this.datos.nombre;
       this.usuario.apellido = this.datos.apellido;
       this.usuario.direccion= this.datos.direccion;
       this.usuario.correo_electronico = this.datos.correo_electronico;
       this.usuario.telefono = this.datos.telefono;
       this.usuario.imagen = this.datos.avatar;
   
       console.log(this.usuario.imagen);
       console.log(this.usuario.identificacion);

}

getPicture(){
  let options: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    targetWidth: 1000,
    targetHeight: 1000,
    quality: 100
  }
  this.camera.getPicture( options )
  .then(imageData => {
    this.foto = 'data:image/jpeg;base64,${imageData}';
  })
  .catch(error =>{
    console.error( error );
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  actualizar() {
    let loader = this.loadingController.create({
    content: "Actualizando información ...",
    duration:5000
  });

  loader.present();
  this.authService.actualizar(this.usuario, this.foto).then((result) => {
   
     
    this.test =  JSON.stringify(result['usuario']);
    localStorage["Datos"] = this.test;
      let alert = this.alertController.create({
      title:'Club Vival', 
      subTitle:'Información actualizada correctamente',
      buttons:['OK']
    });
    alert.present();
    loader.dismissAll();
    //this.navCtrl.push(this.navCtrl.getActive().component);
    // localStorage.setItem('token', this.data.access_token);
  //this.navCtrl.push(ProyectosPage);
  this.navCtrl.pop();
  }, (err) => {
     loader.dismissAll();
   let alert = this.alertController.create({
      title:'Club Vival ', 
      subTitle: 'Información actualizada correctamente',
      buttons:['OK']
    
    });
     
    alert.present();
    
    //console.log(err.message);
    
  });
  
}


}
