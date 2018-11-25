import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
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
    console.log('ionViewDidLoad LoginPage');
  }
  login(email, password){
    let { emailv, passwordv } = this.loginForm.controls;
 
    if (!this.loginForm.valid) {
      if (!emailv.valid) {
        this.errorEmail = true;
        this.messageEmail = "Ops! Email inválido";
      } else {
        this.messageEmail = "";
      }
      if (!passwordv.valid) {
        this.errorPassword = true;
        this.messagePassword ="A senha precisa ter de 6 a 20 caracteres"
      } else {
        this.messagePassword = "";
      }
    }
    else {
      this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user)=>{
        this.navCtrl.setRoot('HomePage',{email});
      });
    }   
  }
  newConta(){
      this.navCtrl.setRoot('NewAcountPage');
      
  }
}
