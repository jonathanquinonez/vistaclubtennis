import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController,ToastController, ActionSheetController  } from 'ionic-angular';

import { AppSettings } from "../../app/app.constants";
import { UsersProvider } from '../../providers/users/users';

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
}
test :any;
datos:any;
  constructor(public navparams:NavParams, private alertController:AlertController,public navCtrl: NavController,public authService:UsersProvider,private loadingController:LoadingController, private toastCtrl: ToastController,public actionSheetController: ActionSheetController) {
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

/* fileTransfer: TransferObject = this.transfer.create();

optionsCamera: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  optionsPicture: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  options = {
      camera: this.optionsCamera,
      gallery: this.optionsPicture
  }*/

/* presentActionSheet() {
    let actionSheet = this.actionSheetController.create({
      title: 'Cambiar Foto de Perfil',
      buttons: [
        {
          text: 'Cámara',
          handler: () => {
            this.takePicture("camera");
            console.log('Destructive clicked');
          }
        },{
          text: 'Galería',
          handler: () => {
            this.takePicture("gallery");
            console.log('Archive clicked');
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
}*/

/*private takePicture(source){
  this.camera.getPicture(this.options[source]).then((imageData) => {
      console.log("Foto Tomada: ",imageData);
      var token = localStorage["User"];
      let options: FileUploadOptions = {
        fileKey: 'avatar',
        fileName: imageData.substr(imageData.lastIndexOf('/') + 1),
        headers: {"Authorization":"Bearer "+ token.replace(/['"]+/g, ''),"Accept":"application/json"}
      }
   

this.authService.subir(imageData,options).then((result) => {
       
        console.log(result);
        let alert = this.alertController.create({
        title:'Su referido ha sido registrado correctamente', 
        subTitle:'Pronto nos pondremos en contacto ',
        buttons:['OK']
      });
      alert.present();
      // localStorage.setItem('token', this.data.access_token);
    this.navCtrl.push(ProyectosPage);
    }, (err) => {
      
       
     let alert = this.alertController.create({
        title:'Club Vival', 
        subTitle: err,
        buttons:['OK']
      
      });
      // this.navCtrl.push(UserLogin);
      alert.present();
     
      //console.log(err.message);
      
    });


      this.fileTransfer.upload(imageData, AppSettings.Api+"usuarios/avatar", options)
        
        .then((data) => {
          // successç
           let alert = this.alertController.create({
        title:'hay imagen ', 
        subTitle:'Pronto nos pondremos en contacto ',
        buttons:['OK']
      });
      alert.present();
      
          console.log(data);
        }, (err) => {
           let alert = this.alertController.create({
        title:'nohay imagen ', 
        subTitle:err.message,
        buttons:['OK']
      });
      alert.present();
          // error
          console.error(err);
        })

  }, (err) => {
  // Handle error
      let alert = this.alertController.create({
      title:'¿Te veremos pronto por aqui?', 
      subTitle: 'Prueba tomandote otra foto',
      buttons:['OK']
      });
      alert.present();
  });
}
*/
/* actualizar() {
      let loader = this.loadingController.create({
      content: "Actualizando información ..."
    });

    loader.present();
    this.authService.actualizar(this.usuario).then((result) => {
      loader.dismissAll();
       
      this.test =  JSON.stringify(result['usuario']);
      localStorage["Datos"] = this.test;
        let alert = this.alertController.create({
        title:'Club Tennis Golf Club ', 
        subTitle:'Información actualizada correctamente',
        buttons:['OK']
      });
      alert.present();
      //this.navCtrl.push(this.navCtrl.getActive().component);
      // localStorage.setItem('token', this.data.access_token);
    //this.navCtrl.push(ProyectosPage);
    this.navCtrl.pop();

    }, (err) => {
       loader.dismissAll();
     let alert = this.alertController.create({
        title:'Club Tennis Golf Club ', 
        subTitle: 'Información actualizada correctamente',
        buttons:['OK']
      
      });
       this.navCtrl.push(UserLogin);
      alert.present();
      //console.log(err.message);
      
    });
}*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
