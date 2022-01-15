import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherDTO } from 'src/app/models/weather';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weather?: WeatherDTO;

  constructor(private WeatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }
  private getWeather() {
    this.WeatherService.getWeather()
    // this.weather.subscribe();
      .subscribe((data:WeatherDTO) => this.weather = data);
  }

}
