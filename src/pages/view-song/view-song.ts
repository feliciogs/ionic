import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.model';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { SongService } from '../../services/song.service';

/**
 * Generated class for the ViewSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-song',
  templateUrl: 'view-song.html',
})
export class ViewSongPage {
  song: Song;
  message:string = null;
  file: string =null;
  link: string = null;
  subject: string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing) {
    
  }

  ionViewWillLoad() {
    this.song = this.navParams.get('song');
  }
  share(){
    this.message = this.song.chords;  
    this.socialSharing.share(this.message,this.subject,this.file,this.link)
    .then(()=>{

    }).catch(()=>{

    });
  }
}
