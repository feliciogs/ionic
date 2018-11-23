import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { isTrueProperty } from 'ionic-angular/umd/util/util';

/**
 * Generated class for the InvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer:EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }

  sendEmail(){
    let email = {
      to:'',
      cc:'',
      attachments:[],
      subject:'Curta essa frase',
      body:'Verifique esse aplicativo na APPSTORE e GOOGLEPLAY',
      isHtml: isTrueProperty 
    };
    this.emailComposer.open(email);
  }

}
