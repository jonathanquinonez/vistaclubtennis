import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestNoticiasProvider } from '../../providers/rest-noticias/rest-noticias';
/**
 * Generated class for the DetallenoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallenoticia',
  templateUrl: 'detallenoticia.html',
})
export class DetallenoticiaPage {
  public idsalon;
  data: any;
  users: any=[];
  errorMessage: string;
  
  datasalon:any =[];
  datasalonimg:any =[];
  Infosalon:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restnoticiasprovider: RestNoticiasProvider) {
  this.idsalon = navParams.get("idsalon");
  console.log("entro a la pagina detalle");
  
  this.getImgSalon();
  this.getSalon();
  }
  getSalon() {

  this.restnoticiasprovider.getdetalleNoticias(this.idsalon)
    .then(data => {
      this.data = data;
      this.datasalon = this.data.data; 
    //  this.datasalon = data;
      console.log(this.datasalon);
      console.log(this.data);
    })
  }

  getImgSalon() {
    this.restnoticiasprovider.getImgnoticias(this.idsalon)
      .then(data1 => {
        this.datasalonimg = data1; 
      // this.datasalonimg =  this.datasalonimg.data;
        console.log(this.datasalonimg);
       // console.log(this.data);
      })
    }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallenoticiaPage');
  }

}
