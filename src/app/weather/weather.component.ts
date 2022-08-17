import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  // Po : aprašomas kintamojo tipas
  weatherData: any;
  city: string = "Vilnius";
  apik: string = "3045dd712ffe6e702e3245525ac7fa38";

  constructor() {

  }

  ngOnInit(): void {
    // Iškivetus komponenta, išškviečiame duomenų gavimo funkcija
    this.getWeatherData();
  }

  getWeatherData() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      this.city +
      "&appid=" +
      this.apik
    )
    .then((res) => res.json())
    .then((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
    .catch((err) => alert("You entered WRONG city name !!!"));
  }

}
