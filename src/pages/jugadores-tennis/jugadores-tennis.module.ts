import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JugadoresTennisPage } from './jugadores-tennis';

@NgModule({
  declarations: [
    JugadoresTennisPage,
  ],
  imports: [
    IonicPageModule.forChild(JugadoresTennisPage),
  ],
})
export class JugadoresTennisPageModule {}
