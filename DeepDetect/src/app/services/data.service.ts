import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  public startScan(givenLink){
    const headers = new HttpHeaders({
      'X-Deepware-Authentication': 'cf870d5f-4f13-4836-81e6-bf7f6ce7b8f5',
      "Accept": "application/json",
      'Content-Type': 'multipart/form-data\
  https://api.deepware.ai/api/v1/url/scan',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-Deepware-Authentication'
    });

    return this.http.get("https://thingproxy.freeboard.io/fetch/https://api.deepware.ai/api/v1/url/scan?video-url=" + givenLink, { headers: headers });
  }

  public getReport(reportID){

    const headers = new HttpHeaders({
      'X-Deepware-Authentication': 'cf870d5f-4f13-4836-81e6-bf7f6ce7b8f5',
      "Accept": "application/json",
      'Content-Type': 'multipart/form-data\
  https://api.deepware.ai/api/v1/url/scan',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-Deepware-Authentication'
    });
    

    return this.http.get("https://thingproxy.freeboard.io/fetch/https://api.deepware.ai/api/v1/video/report?report-id=" + reportID, { headers: headers });

    
  }
}
