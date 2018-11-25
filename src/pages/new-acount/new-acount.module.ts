import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAcountPage } from './new-acount';

@NgModule({
  declarations: [
    NewAcountPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAcountPage),
  ],
})
export class NewAcountPageModule {}
