import { Component } from '@angular/core';
import { AlertServiceService } from '../alert/alert-service.service';
import { DataStorageService } from '../shared/data/data-storage.service';



@Component({
  selector: 'app-router-container',
  templateUrl: './router-container.component.html',
  styleUrls: ['./router-container.component.css'],
  //providers: [ServiceService, AlertServiceService]
})
export class RouterContainerComponent {

  constructor(private dataStorageService: DataStorageService, public alert: AlertServiceService) { }

  get startingValues() {
    return this.dataStorageService.startingValues;
  }

  get isVisible() {
    return this.alert.isAlertVisible;
  }
  showAlert() {
    this.alert.isAlertVisible = true;
  }

}
