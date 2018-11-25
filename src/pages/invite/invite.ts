import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {
  message:string = null;
  file: string =null;
  link: string = null;
  subject: string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer:EmailComposer,private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }
  share(){
    this.socialSharing.share(this.message,this.subject,this.file,this.link)
    .then(()=>{

    }).catch(()=>{

    });
  }

  sendEmail(){
    let email = {
      to: '',
      cc: '',
      attachments:[

      ],
      subject: 'Curta essa frase',
      body: 'Verifique esse aplicativo na APPSTORE e GOOGLEPLAY',
      isHtml: true 
    };
    this.emailComposer.open(email);
  }

}
