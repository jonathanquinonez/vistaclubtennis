import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AutorizaraccesoPage } from '../autorizaracceso/autorizaracceso';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
 })
 export class HomePage {
  constructor(public navCtrl: NavController) {}
  autorizaracceso(){
   this.navCtrl.push(AutorizaraccesoPage);
  }
  
 }