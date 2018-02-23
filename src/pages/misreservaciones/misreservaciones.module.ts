import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisreservacionesPage } from './misreservaciones';

@NgModule({
  declarations: [
    MisreservacionesPage,
  ],
  imports: [
    IonicPageModule.forChild(MisreservacionesPage),
  ],
})
export class MisreservacionesPageModule {}
