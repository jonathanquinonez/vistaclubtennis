import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms'

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
  LoginForm:FormGroup;

  constructor(public formBuilder:FormBuilder,private alertController:AlertController,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.LoginForm = formBuilder.group({
      Descripcion:['',Validators.compose([Validators.required])],
      Nombre:['',Validators.compose([Validators.required])],
      Asunto:['',Validators.compose([Validators.required])]
    });
  }

  Login(event){
    if(!this.LoginForm.valid){
              
             
           
                    let alert = this.alertController.create({
                          title:' Formulario Pqrs', 
                          subTitle:"Es necesario que completes los campos requeridos",
                          buttons:['OK']
                        });
                        alert.present();
           
       }else{
          let alert1 = this.alertCtrl.create({
            title: 'Mensaje Enviado!',
            subTitle: 'Su mensaje ha sido enviado satisfactoriamente!',
          // buttons: ['OK']
          });
          
          alert1.present();
          this.LoginForm.reset();
          
        }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PqrsPage');
  }

}
