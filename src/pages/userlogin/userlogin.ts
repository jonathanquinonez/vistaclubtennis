import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController,ToastController  } from 'ionic-angular';
import { MenuprincipalPage } from '../menuprincipal/menuprincipal';

import { TeetimePage } from '../teetime/teetime';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
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
    //console.log(this.screenOrientation.type);
  //  this.screenOrientation.unlock();
  //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
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
        content: 'Iniciando Sesion...',
        duration:3000
      });
  
      loader.present();
     console.log('aqui');
      this.usersprovider.login(this.credentials).then((data:User) =>{
        
        loader.dismissAll();
       // console.log(data['token']);
       

          //this.navCtrl.setRoot(MenuprincipalPage);
        //this.navCtrl.(TeetimePage,{
         // datatoke:data,
       // });
      console.log(JSON.stringify(data)+"aqui");
      console.log(data);
      console.log("medio");
      console.log(localStorage["User"]);
      console.log(localStorage["correo_user"]);
      console.log(localStorage["Datos"]);

      if(JSON.stringify(data) == '{"error":"invalid_credentials"}'){
        let alert = this.alertController.create({
          title:'Tennis Golf  Club!', 
          subTitle:"Contraseña o Usuario Incorrecto, Porfavor intenta de nuevo",
          buttons:['OK']
        });
        alert.present();
   }else{
          
    localStorage["Datos"] = JSON.stringify(data['usuario']);
    localStorage["correo_user"] = JSON.stringify(this.credentials.correo_electronico);
    //AppSettings.datos = localStorage["Datos"];
     localStorage["User"] = JSON.stringify(data['token']);
     this.navCtrl.setRoot(MenuprincipalPage);
     console.log(JSON.stringify(data)+"aqui");
     console.log(data);
     console.log("medio");
     console.log(localStorage["User"]);
     console.log(localStorage["correo_user"]);
     console.log(localStorage["Datos"]);

   }


      }, error =>{
    
        loader.dismissAll();
         //console.log('hola'+error.message.correo_electronico);
         if (error){
          console.log(error.message);
          if(error.message == null || error.message == "invalid_credentials"){
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
                   }
                  //if(error.message.correo_electronico == null || error.message.correo_electronico == undefined){
                   //     console.log(error);
                  // }else{
                    // console.log('hola');
                   //}
  
  

                  }
                  
           
             
             console.log(error);
           })
          }
         }

  menuprincipal(){
    this.navCtrl.push(MenuprincipalPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserloginPage');
  }

 

}
