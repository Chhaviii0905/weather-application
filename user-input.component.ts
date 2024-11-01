import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  cityName: string = '';

  @Output() citySelected = new EventEmitter<string>();

  onSubmit() {
    this.citySelected.emit(this.cityName);
  }
}
