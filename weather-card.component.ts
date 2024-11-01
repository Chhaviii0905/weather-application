import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() cityName: string = '';
  @Input() temperature: number = 0;
  @Input() weatherDescription: string = '';
  @Input() isCelsius: boolean = true;
}
