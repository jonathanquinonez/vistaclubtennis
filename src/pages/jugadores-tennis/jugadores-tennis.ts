import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MisreservacionesPage } from '../misreservaciones/misreservaciones';
import { RestReservacionesProvider } from '../../providers/rest-reservaciones/rest-reservaciones';
/**
 * Generated class for the JugadoresTennisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores-tennis',
  templateUrl: 'jugadores-tennis.html',
})
export class JugadoresTennisPage {



public canchas1:any=[];
public id_canchas:any;

  LoginForm2:FormGroup;
  turnosx: any = [];
  idhoraseleccionada:any;
  jugadoresarray = Array(); // array donde se guardan el nombre de todos los jugadores
  valornombrejugador:any;  // valor que se envia al metodo que crea los jugadores
  datajugadores: any= [];
   idturno:any=[];
   estadoturno:any=[];
   public reseva:any=[];
    public  reseva1:any={};
    public AppSettings:any=[];
 fecharespaldo:any;
    public nombre : any;
    public apellido : any;
   // variable que contendrea la hora de cada turno
 public horadeturno:any=[];
  fechaturno:Date;
  fechaseleccionada;
  grupo2 = {
  jugador1:'',
  jugador2:'',
  jugador3:'',
  jugador4:''
  }
  currentDatev1 = '2017-09-12';
  currentDatev2 = '2017-12-12';
  myDate:any;
   constructor(private loadingController:LoadingController,public formBuilder:FormBuilder,private alertController:AlertController,public navCtrl: NavController, public navParams: NavParams, public restteetime: RestReservacionesProvider) {
   this.LoginForm2 = formBuilder.group({
       jugador11:['',Validators.compose([Validators.required])],
       jugador22:['',Validators.compose([Validators.required])],
       jugador33:['',Validators.compose([Validators.required])]
       
       
     });
 
     this.AppSettings.datos =JSON.parse(localStorage["Datos"]);
     
      this.nombre = this.AppSettings.datos.nombre;
      this.apellido = this.AppSettings.datos.apellido;
      this.canchas();

   }
   reservar(){
    if(!this.LoginForm2.valid){
       
      
    
             let alert = this.alertController.create({
                   title:' Tennis Golf  Club', 
                   subTitle:"Es necesario que completes los campos requeridos",
                   buttons:['OK']
                 });
                 alert.present();
          
     
    
           }else{
             
             this.jugadorearray();
             
              
 
               console.log(this.grupo2.jugador1);
               console.log(this.grupo2.jugador2);
               console.log(this.grupo2.jugador3);
               console.log(this.grupo2.jugador4);
             console.log(this.fechaseleccionada);
             console.log("aquiiii");
               console.log(this.reseva);
              // console.log(this.currentDatev2);
              // 
             } 
            
         
              
           
   }
 
   jugadorearray(){
     this.jugadoresarray["jugador1"]= this.grupo2.jugador1;
     this.jugadoresarray["jugador2"]= this.grupo2.jugador2;
     this.jugadoresarray["jugador3"]= this.grupo2.jugador3;
     this.jugadoresarray["jugador4"]= (this.nombre = this.AppSettings.datos.nombre)+" "+(this.apellido = this.AppSettings.datos.apellido);
     let loader = this.loadingController.create({
      content: 'Creando Reservacion...',
      duration:5000
    });

    loader.present();

     this.reservarteetime();
   }
  
   fecha1(fechaturno){
    
      this.fechaturno = fechaturno;
      this.fecharespaldo=fechaturno
     
    // this.canchas();
      console.log(this.fechaturno+ "fecha seleccionada, variable fechaturno"+"id cancha"+this.id_canchas);
      this.turnos(this.fechaturno,this.id_canchas);
    }
   hora1(){
     this.idhoraseleccionada;

     
    console.log("entro a la hora");
     console.log(this.idhoraseleccionada);
   }

   cancha(id_canchas){
   //this.id_canchas;
    this.id_canchas=id_canchas;
    //this.canchas();
   console.log("entro a mirar el id cancha"+this.id_canchas+"fecha"+this.fechaturno);
   //this.turnos2(id_canchas)
   this.turnos(this.fechaturno,this.id_canchas);
   
  }
 //// todas las canchas de tennis
   canchas(){
    this.restteetime.getcanchastennis()
    .then(data => {
      this.canchas1 = data;
     
      console.log(this.canchas1);
    }, (err) => {
     
     console.log("fallo al reservar2"+err);
   })
  } 


  turnos(fechaturno,id_canchas){
     this.restteetime.getTunosxdisciplina(fechaturno,id_canchas)
     .then(data => {
       this.turnosx = data;
      
       console.log(this.turnosx);
     }, (err) => {
      
      console.log("fallo al reservar2"+err);
    })
   }
   /*turnos2(id_canchas){
    console.log(this.fecharespaldo);
    this.restteetime.getTunosxdisciplina(this.fecharespaldo,id_canchas)
    .then(data => {
      this.turnosx = data;
     
      console.log(this.turnosx);
     
    }, (err) => {
     
     console.log("fallo al reservar2"+err);
   })
  }*/
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
       }, (err) => {
        
        console.log("fallo al reservar2"+err);
      }) 
     }  
     this.restteetime.getTurnoestado(this.fechaseleccionada)
     .then(data => {
       this.estadoturno = data; /// contiene el bloque creado, de aqui  this.horadeturno.fecha_hora_inicio,this.horadeturno.fecha_hora_fin
       ////sacamos el id, para agrupar los jugadores this.currentDatev1,this.currentDatev1
     //  this.idturno = this.reseva;
     this.estadoturno =  this.estadoturno.data;
       console.log(this.estadoturno+"id de turno");
       this.navCtrl.push(MisreservacionesPage);
     }, (err) => {
      
      console.log("fallo al reservar2"+err);
    })
       
   }
 
   reservarteetime(){
    
    //console.log("hoa inicio:"+this.horadeturno.fecha_hora_inicio+"horas fin: " +this.horadeturno.fecha_hora_fin);
    this.restteetime.getTurno(this.fechaseleccionada)
    .then(data => {
      this.horadeturno = data; 
      this.horadeturno = this.horadeturno.data; 
    console.log("entro a gettturnoid");
    console.log(this.horadeturno);
    
    this.restteetime.postTeetime(this.fechaseleccionada,this.horadeturno.fecha_hora_inicio,this.horadeturno.fecha_hora_fin)
    .then(data => {
      if(data == null){

        let alert = this.alertController.create({
          title:' Tennis Golf  Club', 
          subTitle:"Fallo al crear la reservación",
          buttons:['OK']
        });
        alert.present();
       return;
      }
      this.reseva = data; /// contiene el bloque creado, de aqui  this.horadeturno.fecha_hora_inicio,this.horadeturno.fecha_hora_fin
      ////sacamos el id, para agrupar los jugadores this.currentDatev1,this.currentDatev1
    //  this.idturno = this.reseva;
    this.reseva =  this.reseva.data;
      console.log(this.reseva);
      this.jugadores4();
    }, (err) => {
      
      console.log("fallo al reservar1"+err);
    })
      
    }, (err) => {
      
      console.log("fallo al reservar2"+err);
    })

    
    
  }
 
 
   ionViewDidLoad() {
     console.log('ionViewDidLoad JugadoresPage');
   }
 
 }
 