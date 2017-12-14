import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeetimePage } from '../teetime/teetime';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers } from "@angular/http";

/**
 * Generated class for the AutorizaraccesoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autorizaracceso',
  templateUrl: 'autorizaracceso.html',
})
export class AutorizaraccesoPage {
  public anArray:any=[];
  
    public lenofarr:any;
    btn:any
    data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('this.anArray',this.anArray);
    this.btn=false;
    this.data=false;
  }

    teetime(){
      this.navCtrl.push(TeetimePage);
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutorizaraccesoPage');
  }

  goTo(){
    console.log('this.anArray',this.anArray);
      this.data=true;
  }

  Add(key){
      console.log('key',key)
      for(let i =0;i<key;i++){
        this.anArray.push({label:'Name',value:''});
      }
      console.log('this.anArray',this.anArray);
      this.btn=true;
  }
  deleted(key){
    console.log('key',key)
    for(let i =0;i<key;i++){
      this.anArray.push({label:'Name',value:''});
    }
    console.log('this.anArray',this.anArray);
    this.btn=false;
}


}
