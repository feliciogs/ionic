import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongService } from '../../services/song.service';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song.model';
import { Band } from '../../models/band.model';
import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  songsList$: Observable<Song[]>;
  bandsList$: Observable<Band[]>;
  band: Band = {
    name:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private songsService: SongService, public loadingCtrl: LoadingController) {
      this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes=>{
        return changes.map(c=>({
          key: c.payload.key, ...c.payload.val()
        }));
      });
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

  onContextChange(ctxt: string): void{
    this.songsList$ = this.songsService.assembleBandFilteredList(ctxt).snapshotChanges().map(changes =>{
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  
  
  showAllSongs(){
    this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes=>{
      return changes.map(c=>({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

}
