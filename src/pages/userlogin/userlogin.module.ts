import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserloginPage } from './userlogin';

@NgModule({
  declarations: [
    UserloginPage,
  ],
  imports: [
    IonicPageModule.forChild(UserloginPage),
  ],
  exports: [
    UserloginPage
  ]
})
export class UserloginPageModule {}
