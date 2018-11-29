import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseError } from '@firebase/util';
/**
 * Generated class for the NewAcountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-acount',
  templateUrl: 'new-acount.html',
})
export class NewAcountPage {
  public loginForm: any;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;
  credentialsForm: FormGroup;
  msgErro : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public angularFireAuth: AngularFireAuth,
     public formBuilder: FormBuilder,
     public toastCtrl: ToastController) {
    this.loginForm = formBuilder.group({
      emailv: ['', Validators.required],
      passwordv: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAcountPage');
  }
  register(email, password){
    let { emailv, passwordv } = this.loginForm.controls;
    if (!this.loginForm.valid) {
      if (!emailv.valid) {
        this.errorEmail = true;
        this.messageEmail = "Ops! Email já existe ou é inválido";
      } else {
        this.messageEmail = "";
      }
      if (!passwordv.valid) {
        this.errorPassword = true;
        this.messagePassword ="A senha precisa ter de 6 a 20 caracteres"
      } else {
        this.messagePassword = "";
      }
    }else {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((res)=>{
      this.navCtrl.setRoot('HomePage', {email});
    })
    .catch((erro: FirebaseError) => {
      if (erro.code === 'auth/weak-password') {
            this.msgErro = "A senha deve conter no mínimo 6 caracteres";
          }
          else if(erro.code === 'auth/invalid-email'){
            this.msgErro = "O email informado é invalido";
          }
          else {
              this.msgErro = "O email informado já está cadastrado";
          }
      this.exibirToast(this.msgErro);
    }); 
  }
}
    private exibirToast(erro: string): void {
      let toast = this.toastCtrl.create({duration: 3000, 
                                        position: 'botton'});
      toast.setMessage(erro);
      toast.present();
      console.log(erro);
    }
}
