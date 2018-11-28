import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseError } from '@firebase/util';

/**
 * Generated class for the ResetpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpwd',
  templateUrl: 'resetpwd.html',
})
export class ResetpwdPage {
  msgErro : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpwdPage');
  }

  resetPassword(email){
    this.angularFireAuth.auth.sendPasswordResetEmail(email)
      .then((user)=>{
        this.navCtrl.setRoot('LoginPage');
      })
      .catch((erro: FirebaseError) => {
        if (erro.code === 'auth/weak-password') {
          this.msgErro = "A senha deve conter no mínimo 6 caracteres";
        }
          else if(erro.code === 'auth/invalid-email'){
            this.msgErro = "O email informado é invalido";
          }
            else if(erro.code === 'auth/argument-error'){
              this.msgErro = "Por favor informe um email!";
            }
              else{
                this.msgErro = "Email não existe ou não está cadastrado";
              }   
        this.exibirToast(this.msgErro);
    });  
    }
    private exibirToast(erro: string): void {
      let toast = this.toastCtrl.create({duration: 3000,position: 'botton'});
      toast.setMessage(erro);
      toast.present();
      console.log(erro);
  }
  
}