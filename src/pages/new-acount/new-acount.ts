import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAcountPage');
  }
  register(email, password){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((res)=>{
      this.navCtrl.setRoot('RegisterPage', {email});
    });
  }
}
