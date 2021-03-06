import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms'

import { RestPqrsProvider } from '../../providers/rest-pqrs/rest-pqrs';
/**
 * Generated class for the PqrsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-pqrs',
  templateUrl: 'pqrs.html',
})
export class PqrsPage {
  LoginForm2:FormGroup;
  credentials = {
    asunto:'',
    descripcion:'',
    correo:localStorage["correo_user"].replace(/['"]+/g, ''),
    estado:0,
  }

  datos:any=[];

  constructor(public pqrprovider:RestPqrsProvider,public formBuilder:FormBuilder,private alertController:AlertController,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.LoginForm2 = formBuilder.group({
      Descripcion:['',Validators.compose([Validators.required])],
      Asunto:['',Validators.compose([Validators.required])]
    });

    console.log(this.credentials);
  }

  Login1(event){
    if(!this.LoginForm2.valid){
              
             
           
                    let alert = this.alertController.create({
                          title:' Formulario Pqrs', 
                          subTitle:"Es necesario que completes los campos requeridos",
                          buttons:['OK']
                        });
                        alert.present();
           
       }else{
         console.log("entro al else");

          this.pqrprovider.pqr(this.credentials)
          .then(data => {
            this.datos = data;
           
            console.log(this.datos);
            let alert1 = this.alertCtrl.create({
              title: 'Mensaje Enviado!',
              subTitle: 'Su mensaje ha sido enviado satisfactoriamente!',
            // buttons: ['OK']
            });
            alert1.present();
            this.LoginForm2.reset();
          })       
  }
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PqrsPage');
  }

}
