import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.model';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private songs:SongService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSongPage');
  }
  addSong(song: Song){
    this.songs.addSong(song).then(ref=>{
      this.navCtrl.setRoot('HomePage', {key:ref.key});
    });
  }
}
