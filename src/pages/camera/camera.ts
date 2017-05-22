import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, SocialSharing } from 'ionic-native';

/*
Generated class for the Camera page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  public path;
  public displayPhotoMenu:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

 	/**
  	*  Open the camera device
  	*/
  	public openCamera():void{

  		let options = {
  			quality: 50,
  			destinationType: Camera.DestinationType.FILE_URI,
  			sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
  			encodingType: Camera.EncodingType.JPEG,
  			mediaType: Camera.MediaType.PICTURE,
  			allowEdit: true,
  			correctOrientation: true 
  		};

  		Camera.getPicture(options).then((imageData) => {
  			this.path = imageData;
        this.displayPhotoMenu = true;
      }, (err) => {
      });
    }

  /**
  * Share via Twitter
  */
  public shareViaTwitter():void{
    let prompt = this.alertCtrl.create({
      title: 'Twitter',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
      ],
      buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel');
        }
      },
      {
        text: 'Sent',
        handler: data => {
          SocialSharing.shareViaTwitter(data.message, this.path);
        }
      }
      ]
    });
    prompt.present();
  }

  /**
  * Share via WhatsApp
  */
  public shareViaWhatsApp():void{
    let prompt = this.alertCtrl.create({
      title: 'WhatsApp',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
      ],
      buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel');
        }
      },
      {
        text: 'Sent',
        handler: data => {
          SocialSharing.shareViaWhatsApp(data.message, this.path);
        }
      }
      ]
    });
    prompt.present();
  }

  /**
  * Share via Facebook
  */
  public shareViaFacebook():void{
    let prompt = this.alertCtrl.create({
      title: 'Facebook',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
      ],
      buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel');
        }
      },
      {
        text: 'Sent',
        handler: data => {
          SocialSharing.shareViaFacebook(data.message, this.path);
        }
      }
      ]
    });
    prompt.present();
  }

  /**
  * Share via Instagram
  */
  public shareViaInstagram():void{
    let prompt = this.alertCtrl.create({
      title: 'Instagram',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
      ],
      buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel');
        }
      },
      {
        text: 'Sent',
        handler: data => {
          SocialSharing.shareViaInstagram(data.message, this.path);
        }
      }
      ]
    });
    prompt.present();
  }

}
