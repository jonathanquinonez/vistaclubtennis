import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  LoadingController, AlertController, ToastController} from 'ionic-angular';
import { DetallenoticiaPage } from '../detallenoticia/detallenoticia';

import { RestNoticiasProvider } from '../../providers/rest-noticias/rest-noticias';
/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  data: any;
users: any=[];
errorMessage: string;
page = 1;
perPage = 0;
totalData = 0;
totalPage = 0;
current_page= 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restnoticiasprovider: RestNoticiasProvider, private alertController: AlertController , private loadingController: LoadingController, private toastCtrl: ToastController) {
    this.getUsers();
  }

  getUsers() {
    this.restnoticiasprovider.getNoticias(this.page)
    .then(data => {
      console.log(this.data = data);
      console.log(this.current_page = this.data.data.next_page_url);
           console.log(this.users = this.data.data.data);
           console.log(this.perPage = this.data.data.per_page);
           console.log(this.totalData = this.data.data.total);
           console.log(this.totalPage = this.data.data.to);
         },
         error =>  this.errorMessage = <any>error);
  }

  public pagingEnabled: boolean = true;
  doInfinite(infiniteScroll: any) {
    this.current_page = this.current_page + 1;
    this.page +1;
    this.restnoticiasprovider.getNoticias(this.page)
    .then(data => {
        this.data = data;
        this.users = this.data.data.data;  
        
        if(this.users.length) {
            for (let i in this.users) {
                this.users.push(this.users[i]);
            }
        } 
          console.log(this.users.next_page_url+"entro al legthn");
          if(this.users.next_page_url == null){
            /*let alert = this.alertController.create({
              title:'Problemas al consultar la información', 
             buttons:['OK']
            });
            alert.present();*/
            this.pagingEnabled =false;
           
         
        }
      //  console.log(infiniteScroll.enable() +"revisar");
        infiniteScroll.complete();

      
        
        
    } , error=>{
       
      let alert = this.alertController.create({
        title:'Problemas al consultar la información', 
        subTitle:error.message,
        buttons:['OK']
      });
      alert.present();
      console.log(error);
    });
}

detallesalon1(id){
  console.log("entro a detallesalon");
  this.navCtrl.push(DetallenoticiaPage, {
    idsalon: id,
  })
}



  ionViewDidLoad(){
    console.log('ionViewDidLoad NoticiasPage');
  }

}
