import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    WeatherCardComponent,
    ForecastCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
