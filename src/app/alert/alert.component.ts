import { Component } from '@angular/core';
import { AlertServiceService } from './alert-service.service';
import { DataStorageService } from '../shared/data/data-storage.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  constructor(
    public dataStorageService: DataStorageService,
    public alert: AlertServiceService
  ) {}

  get startingValues() {
    return this.dataStorageService.startingValues;
  }

  createChar() {
    this.startingValues.chooseChar = false;
    this.startingValues.selectedCharacter = this.startingValues.charNumber;
    this.alert.creatingCharacterAlert = false;
  }
  btnReset() {
    this.startingValues.charNumber = '0';
    this.alert.isAlertVisible = false;
  }
  cancelAlert() {
    this.alert.isAlertVisible = false;
    this.alert.statAlert = false;
    this.alert.skillAlert = false;
    this.alert.storyAlert = false;
  }
}
