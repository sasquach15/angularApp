import { Component } from '@angular/core';
import { AlertServiceService } from 'src/app/alert/alert-service.service';
import { ServiceService } from 'src/app/service-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private serviceService: ServiceService, private alert: AlertServiceService, private appRoutes: Router) { }

  get enteredName() {
    return this.serviceService.startingValues.enteredName;
  }
  get isNameVisible() {
    return this.serviceService.startingValues.isNameVisible;
  }
  get isAlertVisible() {
    return this.alert.isAlertVisible;
  }


  imgSrc = '../assets/photos/misc/btnEmptyDisabled.png';


  pickName(event: Event) {
    console.log(event)
    this.serviceService.startingValues.enteredName = (<HTMLInputElement>event.target).value;


    if (this.serviceService.startingValues.enteredName.length >= 3) {
      this.imgSrc = '../assets/photos/misc/btnEmptyFocus.png'

    } else {
      this.imgSrc = '../assets/photos/misc/btnEmptyDisabled.png'
    }

  }

  showName() {
    if (this.serviceService.startingValues.enteredName.length >= 3) {
      this.serviceService.startingValues.isNameVisible = true;
      this.appRoutes.navigate([this.serviceService.startingValues.name.toLocaleLowerCase() + '/equipment'])
      this.serviceService.startingValues.navOpacity = '1';
      this.serviceService.startingValues.navAnimation = '1';
      this.serviceService.startingValues.navActive = '1';
    }
  }

}
