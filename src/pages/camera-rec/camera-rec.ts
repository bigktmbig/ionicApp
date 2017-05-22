import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraPreview, CameraPreviewRect } from 'ionic-native';

/*
Generated class for the CameraRec page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
	selector: 'page-camera-rec',
	templateUrl: 'camera-rec.html'
})
export class CameraRecPage {

	public cameraRect: CameraPreviewRect = {
		x: 100,
		y: 100,
		width: 200,
		height: 200
	};
	public displayButtonTake:boolean;
	public path;
	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CameraRecPage');
	}
	public startCamera():void{

		CameraPreview.startCamera(
			this.cameraRect,
			'back',
			true,
			false,
			false,
			1
			);
		this.displayButtonTake = true;
	}

	public takePicture():void{

		CameraPreview.setOnPictureTakenHandler().subscribe((d)=>{
			this.path = d[0];
			CameraPreview.stopCamera();
		});
		
		let size = {maxWidth: 1024, maxHeight: 640};
		CameraPreview.takePicture(size);
	}

	public SwitchCamera():void{
		CameraPreview.switchCamera();
	}

	public showCamera():void{
		CameraPreview.show();
	}

	public hideCamera():void{
		CameraPreview.hide();
	}

}
