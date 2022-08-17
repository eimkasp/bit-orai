import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiURL = 'https://api.openweathermap.org/data/2.5/weather';
  apik: string = "3045dd712ffe6e702e3245525ac7fa38";

  constructor(private http : HttpClient) {

  }

  get(city : string) {
    /* Http GET užklausos pavyzdys */
    return this.http.get(this.apiURL, {
      params: {
        q: city,
        appid: this.apik,
        units: 'metric'
      }
    });
  }
}
