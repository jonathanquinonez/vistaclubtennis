import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { TeetimePage } from '../teetime/teetime';
import { RestTeetimeProvider } from '../../providers/rest-teetime/rest-teetime';
/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {
  LoginForm1:FormGroup;
 turnosx: any = [];
 idturno;
 fechaturno:Date;
 fechaseleccionada;
 grupo = {
 jugador1:'',
 jugador2:'',
 jugador3:'',
 jugador4:''
 }
 currentDatev1 = '2017-09-12';
 currentDatev2 = '2017-12-12';
 myDate;
  constructor(public formBuilder:FormBuilder,private alertController:AlertController,public navCtrl: NavController, public navParams: NavParams, public restteetime: RestTeetimeProvider) {
    this.LoginForm1 = formBuilder.group({
      jugador11:['',Validators.compose([Validators.required])],
      jugador22:['',Validators.compose([Validators.required])],
      jugador33:['',Validators.compose([Validators.required])],
      jugador44:['',Validators.compose([Validators.required])]
      
    });

  }
  reservar(){
    if(!this.LoginForm1.valid){
      
     
   
            let alert = this.alertController.create({
                  title:' Tennis Golf  Club', 
                  subTitle:"Es necesario que completes los campos requeridos",
                  buttons:['OK']
                });
                alert.present();
         
    
   
          }else{
              this.reservarteetime();

              console.log(this.grupo.jugador1);
              console.log(this.grupo.jugador2);
              console.log(this.grupo.jugador3);
              console.log(this.grupo.jugador4);
            console.log(this.fechaseleccionada);
              console.log(this.currentDatev1);
              console.log(this.currentDatev2);
              this.navCtrl.push(TeetimePage);
            } 
   // 
  }
 
  fecha1($event){
   // this.myDate=this.fechaturno.toString;
   this.turnos();
    console.log(this.fechaturno);
  }
  turnos(){
    this.restteetime.getTunosxdisciplina(this.fechaturno)
    .then(data => {
      this.turnosx = data;
     
      console.log(this.turnosx);
    })
  }
  reservarteetime(){
    this.restteetime.postTeetime(this.fechaseleccionada,this.currentDatev1,this.currentDatev2)
    .then(data => {
      this.turnosx = data;
     
      console.log(this.turnosx);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

}
