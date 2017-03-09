import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

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
 	constructor(public navCtrl: NavController, public navParams: NavParams) {}

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
  			let base64Image = 'data:image/jpeg;base64,' + imageData;
  		}, (err) => {
  		});
  		// Camera.getPicture(options).then((path) => {
  			// 	this.path = path;
  			// 	this.displayPhotoMenu = true;
  			// },(err) =>{

  				// });
  			}

  		}
