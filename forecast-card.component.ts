import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css']
})
export class ForecastCardComponent {
  @Input() date: string = '';
  @Input() temperature: number = 0;
  @Input() weatherDescription: string = '';
}
