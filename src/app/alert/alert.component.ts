import { Component } from '@angular/core';
import { AlertServiceService } from './alert-service.service';
import { ServiceService } from '../service-service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor(public serviceService: ServiceService, public alert: AlertServiceService) { }

  get startingValues() {
    return this.serviceService.startingValues;
  }

  createChar() {
    this.startingValues.creationBegin = true;
    this.startingValues.chooseChar = false;
    this.startingValues.selectedCharacter = this.startingValues.charNumber;
    this.startingValues.navOpacity = '1'
    this.startingValues.navAnimation = '1'
  }
  btnReset() {
    this.startingValues.charNumber = '0';
    this.alert.isVisible = false;
  }
  cancelAlert() {
    this.alert.isVisible = false;
  }
}
