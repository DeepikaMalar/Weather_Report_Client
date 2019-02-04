import { Component, OnInit } from '@angular/core';
import {  RouterModule, Routes   } from '@angular/router';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Headers, Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { weatherModel } from './weather.model'
export const appRoutes: Routes = [
  
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  implements OnInit{
  title = 'weatherclient';
  public weatherImg:String;
  public location:String;
  public temprature:String;
  public isValid :boolean = false;
  public rowCount :number = 1;
  weatherModel :weatherModel;
  weatherModelcards : weatherModel[] = [];
   
  ngOnInit() {
   
  }

  constructor(private http: Http,private httpClient: HttpClient,private route: Router ) {
    
    
   }

   getWeather(city){
    return this.http.post('http://localhost:8085/getWeather', city).subscribe(data => {
      this.weatherModel = new weatherModel();
      this.weatherModel.weatherImg=data.json().current.condition.icon;
      data.json().current.condition.text;
      this.weatherModel.temprature = data.json().current.temp_c;
      this.weatherModel.location = data.json().location.name+ ", "+data.json().location.country; 
      this.weatherModelcards.push(this.weatherModel)
      this.isValid = true;
      if(this.weatherModelcards.length>3){
this.rowCount= Math.floor(this.weatherModelcards.length/3);
      }
    });

    }
   
}
