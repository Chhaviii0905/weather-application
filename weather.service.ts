import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'b1d949fd0a85cac90d823f208d81da89';

  constructor(private http: HttpClient) { }

  getWeather(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`);
  }
  getForecast(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${this.apiKey}`);
  }
}
