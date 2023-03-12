import { Component } from '@angular/core';
import { AlertServiceService } from '../alert/alert-service.service';
import { ServiceService } from '../service-service';



@Component({
  selector: 'app-router-container',
  templateUrl: './router-container.component.html',
  styleUrls: ['./router-container.component.css'],
  //providers: [ServiceService, AlertServiceService]
})
export class RouterContainerComponent {

  constructor(private serviceService: ServiceService, public alert: AlertServiceService) { }

  get startingValues() {
    return this.serviceService.startingValues;
  }

  get isVisible() {
    return this.alert.isVisible;
  }
  showAlert() {
    this.alert.isVisible = true;
  }
}
