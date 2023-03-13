import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private serviceService: ServiceService) { }


  get startingValues() {
    return this.serviceService.startingValues;
  }
  /* get navOpacity() {
    return this.serviceService.startingValues.navOpacity;
  }
  get creationBegin() {
    return this.serviceService.startingValues.creationBegin;
  }
  get navAnimation() {
    return this.serviceService.startingValues.navAnimation;
  } */


  clearContainer() {
    this.serviceService.startingValues.creationBegin = false;
  }

}
