import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController,ToastController  } from 'ionic-angular';
import { MenuprincipalPage } from '../menuprincipal/menuprincipal';
import { TeetimePage } from '../teetime/teetime';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms'
import { User } from '../../classes/User'

import { UsersProvider } from '../../providers/users/users';
/**
 * Generated class for the UserloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userlogin',
  templateUrl: 'userlogin.html',
})
export class UserloginPage {


  LoginForm:FormGroup;
  credentials = {
    correo_electronico:'',
    password:''
  }

  constructor(public formBuilder:FormBuilder,private alertController:AlertController,public navCtrl: NavController,private loadingController:LoadingController, private toastCtrl: ToastController, public usersprovider:UsersProvider) {
    this.LoginForm = formBuilder.group({
      Email:['',Validators.compose([Validators.maxLength(45),Validators.pattern('[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}'),Validators.required])],
      Password:['',Validators.compose([Validators.required])]
    });
}

Login(event){
  if(!this.LoginForm.valid){
            
           
         
                  let alert = this.alertController.create({
                        title:' Tennis Golf  Club', 
                        subTitle:"Es necesario que completes los campos requeridos",
                        buttons:['OK']
                      });
                      alert.present();
               
          
         
     }
     else{
      let loader = this.loadingController.create({
        content: this.credentials.correo_electronico+" "+this.credentials.password
      });
  
      loader.present();
     console.log('aqui');
      /*this.usersprovider.login(this.credentials).then((data:User) =>{
        
        loader.dismissAll();
       // console.log(data['token']);
       localStorage["Datos"] = JSON.stringify(data['usuario']);
       localStorage["correo_user"] = JSON.stringify(this.credentials.correo_electronico);
      // AppSettings.datos = localStorage["Datos"];
        localStorage["User"] = JSON.stringify(data['token']);
        if(data.finished_registration){
          this.navCtrl.setRoot(MenuprincipalPage);
        }
        else{
          this.navCtrl.setRoot(MenuprincipalPage);
        }
       
        /*this.navCtrl.(TeetimePage,{
          datatoke:data,
        });*/
   /*     console.log(data);
      }, error =>{
       
  */
         //console.log('hola'+error.message.correo_electronico);
        /*   if (error){
                this.navCtrl.setRoot(UserloginPage);
                  if(error.message == null || error.message == undefined){
                        let alert = this.alertController.create({
                          title:'Tennis Golf  Club!', 
                          subTitle:"Contraseña Incorrecta, Porfavor intenta de nuevo",
                          buttons:['OK']
                        });
                        alert.present();
                   }else{
                          let alert = this.alertController.create({
                          title:'Tennis Golf  Club!', 
                          subTitle:"El correo electrónico no existe en la base de datos o el Usuario no ha sido validado",
                          buttons:['OK']
                        });
                        alert.present();
                   }*/
                  /*if(error.message.correo_electronico == null || error.message.correo_electronico == undefined){
                        console.log(error);
                   }else{
                     console.log('hola');
                   }*/
  
  
  /*
                  }
                  
           
             
             console.log(error);
           })*/
          }
         }

  menuprincipal(){
    this.navCtrl.push(MenuprincipalPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserloginPage');
  }

 

}
