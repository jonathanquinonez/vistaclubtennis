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
 idhoraseleccionada:any;
 jugadoresarray = Array(); // array donde se guardan el nombre de todos los jugadores
 valornombrejugador:any;  // valor que se envia al metodo que crea los jugadores
 datajugadores: any= [];
  idturno:any=[];
  public reseva:any=[];
   public  reseva1:any={};
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
 myDate:any;
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
            
            this.jugadorearray();
             this.reservarteetime();
             

              console.log(this.grupo.jugador1);
              console.log(this.grupo.jugador2);
              console.log(this.grupo.jugador3);
              console.log(this.grupo.jugador4);
            console.log(this.fechaseleccionada);
            console.log("aquiiii");
              console.log(this.reseva);
             // console.log(this.currentDatev2);
             // 
            } 
           
        
             
          
  }

  jugadorearray(){
    this.jugadoresarray["jugador1"]= this.grupo.jugador1;
    this.jugadoresarray["jugador2"]= this.grupo.jugador2;
    this.jugadoresarray["jugador3"]= this.grupo.jugador3;
    this.jugadoresarray["jugador4"]= this.grupo.jugador4;
  }
 
  fecha1($event){
    this.myDate=this.fechaturno.toString;
   this.turnos();
    console.log(this.fechaturno);
  }
  hora1(){
    this.idhoraseleccionada;
   //this.turnos();
   console.log("entro a la hora");
    console.log(this.idhoraseleccionada);
  }


 turnos(){
    this.restteetime.getTunosxdisciplina(this.fechaturno)
    .then(data => {
      this.turnosx = data;
     
      console.log(this.turnosx);
    })
  }
  /// se crean los jugadores
 jugadores4(){
  console.log("entro a jugadores4");
  console.log(this.reseva.id);

  for (var v in this.jugadoresarray) // for acts as a foreach  
    {  
      this.restteetime.postjugadores(this.reseva.id,this.jugadoresarray[v])
      .then(data => {
        this.datajugadores = data;
       
        console.log(this.datajugadores);
      }) 
    }  
      
      this.navCtrl.push(TeetimePage);
  }


  reservarteetime(){
    this.restteetime.postTeetime(this.fechaseleccionada,this.currentDatev1,this.currentDatev2)
    .then(data => {
      this.reseva = data; /// contiene el bloque creado, de aqui 
      ////sacamos el id, para agrupar los jugadores
    //  this.idturno = this.reseva;
    this.reseva =  this.reseva.data;
      console.log(this.reseva);
      this.jugadores4();
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

}
