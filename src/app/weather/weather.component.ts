// Importuojame httpClient is angular.
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  // Po : aprašomas kintamojo tipas
  weatherData: any;
  @Input() city: string = "Vilnius";


  // Injectiname weatherService komponentui
  constructor(private weatherService : WeatherService) {

  }

  ngOnInit(): void {
    // Iškivetus komponenta, išškviečiame duomenų gavimo funkcija
    this.weatherService.get(this.city).subscribe(data => {
      this.weatherData = data;
    });
  }

}
