import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import { SongService } from '../../services/song.service';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song.model';
import { Band } from '../../models/band.model';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  songsList$: Observable<Song[]>;
  bandsList$: Observable<Band[]>;
  public user : any;
  identifacao : any;
  email: any;
  fotoPerfil:any;
  band: Band = {
    name:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private songsService: SongService, public loadingCtrl: LoadingController,
    public firebaseauth: AngularFireAuth,
    public toastCtrl: ToastController) {
      this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes=>{
        return changes.map(c=>({
          key: c.payload.key, ...c.payload.val()
        }));
      });
      this.user = firebaseauth.auth.currentUser;
  }

  loadingEffect(){
    const loader = this.loadingCtrl.create({
      content: "Carregando aguarde...",
      duration: 900
    });
    loader.present();
  }
  ionViewWillLoad() {
    this.loadingEffect();
    if(this.user != null){

      this.email = this.user.email;
      this.identifacao = this.user.displayName;
      this.fotoPerfil = this.user.photoURL;
      console.log(this.user.fotoPerfil);
    }
    this.bandsList$ = this.songsService.getBandList().snapshotChanges().map(changes=>{
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    }); 
  }

  onContextChange(ctxt: string): void{
    this.loadingEffect();
    this.songsList$ = this.songsService.assembleBandFilteredList(ctxt).snapshotChanges().map(changes =>{
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }
  showAllSongs(){
    this.loadingEffect();
    this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes=>{
      return changes.map(c=>({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }
  public sair(): void {
    this.loadingEffect();
    this.firebaseauth.auth.signOut()
    .then(() => {
      this.navCtrl.setRoot('LoginPage');
    })
    .catch((erro: any) => {
      this.exibirToast(erro);
    });
  }
  private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({duration: 3000,position: 'botton'});
    toast.setMessage(mensagem);
    toast.present();
  }

}
