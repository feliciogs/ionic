import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Song } from '../../models/song.model';
import { Band } from '../../models/band.model';
import { Observable } from 'rxjs/Observable';
import { SongService } from '../../services/song.service';

/**
 * Generated class for the AddSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-song',
  templateUrl: 'add-song.html',
})
export class AddSongPage {
  song: Song ={
    title:'',
    chords:'',
    band:''
  }
  bandsList$: Observable<Band[]>;
  band: Band={
    name:''
  }
  constructor(public navCtrl: NavController,public navParams: NavParams,
    private songs:SongService, private regBand: SongService,
    public loadingCtrl: LoadingController) {
  }

  ionViewWillLoad() {
    const loader = this.loadingCtrl.create({
      content: "Carregando aguarde...",
      duration: 1500
    });
    this.bandsList$ = this.songs.getBandList().snapshotChanges().map(changes=>{
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
    loader.present();
  }
  addSong(song: Song){  
    /*this.band.name = this.song.band;
    this.regBand.addBand(this.band).then(ref=>{});*/ 
    this.songs.addSong(song).then(ref=>{
    this.navCtrl.setRoot('HomePage', {key:ref.key});})
    
  }
}
