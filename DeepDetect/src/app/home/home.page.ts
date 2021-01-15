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
  public reportID: string;
  public completed = false;
  inputValue: string = "";

  constructor(public loadingController: LoadingController, private dataService : DataService) {
    
  }

  ngOnInit() {
    
  }

  async presentLoading() {

    this.dataService.startScan(this.inputValue).subscribe(data =>
      {
        console.log(data);
        this.reportID = data["report-id"]
        console.log(this.reportID);
        
        setTimeout(() => {
          this.dataService.getReport(this.reportID).subscribe(result =>
            {
              console.log(result);
              this.completed = result["completed"];
              if(this.completed === false){
                console.log("Try again later..");
              }
              else{
                console.log(result["completed"]);
                this.result = result;
                console.log(result["score"]);
                console.log("fertik");
              }
            },error =>
            {
              console.log(error);
            },() =>
            {
              console.log('complete!');
          });
        }, 5000);

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

    //this.getReport("03c61a4bc23478b73cf2e367c14cef975f1d2947-1610659700");

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

/*  isComplete(reportID){
    if(this.completed === false){
      console.log("Completed is false right now");
      setTimeout(this.getReport, 3000, reportID);
    }
  }

  startTheScan(){
    
    
  }

  getReport(reportID){
    console.log(reportID);
    if(reportID != undefined){
    
    }
  }
    */
  



}
