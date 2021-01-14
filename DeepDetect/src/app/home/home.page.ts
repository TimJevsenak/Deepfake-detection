import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private result;
  private reportID;
  inputValue: string = "";

  constructor(public loadingController: LoadingController, private dataService : DataService) {
    
  }

  ngOnInit() {
    
  }

  async presentLoading() {

    this.dataService.startScan(this.inputValue).subscribe(data =>
      {
        console.log(data);
        data = JSON.parse(data.toString());
        //????
        console.log(this.reportID);
        this.dataService.getReport(this.reportID).subscribe(result =>
          {
            console.log(result);
            this.result = result;
            console.log(result);
          },error =>
          {
            console.log(error);
          },() =>
          {
            console.log('complete!');
        });

      },error =>
      {
        console.log(error);
      },() =>
      {
        console.log('complete!');
    });


    const loading = await this.loadingController.create({
      cssClass: 'loading-css',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    console.log("Test!");

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    console.log(this.inputValue);

    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }



}
