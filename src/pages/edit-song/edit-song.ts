import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { SongService } from '../../services/song.service';
import { Song } from '../../models/song.model';
/**
 * Generated class for the EditSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-song',
  templateUrl: 'edit-song.html',
})
export class EditSongPage {
  song: Song;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private songs: SongService, private toastCtrl: ToastController,
    public alertCtrl: AlertController) {
  }

  ionViewWillLoad() {
    this.song = this.navParams.get('song');
  }
  saveSong(song: Song){
    this.songs.editSong(song).then(()=>{
      this.exibirToast("Frase editada com Sucesso!");
      this.navCtrl.setRoot('HomePage');
    });
  }
  deleteSong(song: Song){
    let alert = this.alertCtrl.create({
      title:'Apagar Frase',
      message:'Deseja apagar esta frase?',
      buttons:[
        {
          text: 'Cancelar',
          role:'cancel',
          handler:()=>{
            console.log('Cancelar');
          }
        },
        {
          text: 'Apagar',
          handler:()=>{
            this.songs.removeSong(song).then(()=>{
            this.navCtrl.setRoot('HomePage');
            })
          }
        }
      ]
    });
    alert.present();
  }
  private exibirToast(erro: string): void {
    let toast = this.toastCtrl.create({duration: 3000,position: 'botton'});
    toast.setMessage(erro);
    toast.present();
  }
}
