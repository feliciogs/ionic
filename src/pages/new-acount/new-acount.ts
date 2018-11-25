import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth, public formBuilder: FormBuilder) {
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
      this.navCtrl.setRoot('RegisterPage', {email});
    });
  }
}
}
