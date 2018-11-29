import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongService } from '../../services/song.service';
import { Observable } from 'rxjs/Observable';
import { Band } from '../../models/band.model';
import { Song } from '../../models/song.model';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  bandsList$: Observable<Band[]>;
  band: Band={
    name:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private regBand: SongService
    ,private songsService: SongService, public loadingCtrl: LoadingController) {
  }

  ionViewWillLoad() {
    const loader = this.loadingCtrl.create({
      content: "Carregando aguarde...",
      duration: 1500
    });
    this.bandsList$ = this.songsService.getBandList().snapshotChanges().map(changes=>{
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
    loader.present();
  }
  
  addBand(band: Band){
    this.regBand.addBand(band).then(ref=>{
      this.navCtrl.setRoot('HomePage', {key:ref.key});
    });
  }
}
