import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeetimePage } from '../teetime/teetime';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

    teetime(){
      this.navCtrl.push(TeetimePage);
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutorizaraccesoPage');
  }

     /* $scope.inputs = [
        { value: null }
    ];

    $scope.addInput = function () {
        $scope.inputs.push({ value: null });
    }

    $scope.removeInput = function (index) {
        $scope.inputs.splice(index, 1);
}*/

}
