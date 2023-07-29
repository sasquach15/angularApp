import { Component } from '@angular/core';
import { AlertServiceService } from 'src/app/alert/alert-service.service';
import { DataStorageService } from 'src/app/data-storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private dataStorageService: DataStorageService, private alert: AlertServiceService, private appRoutes: Router, private http: HttpClient) { }

  get enteredName() {
    return this.dataStorageService.startingValues.enteredName;
  }
  get isNameVisible() {
    return this.dataStorageService.startingValues.isNameVisible;
  }
  get isAlertVisible() {
    return this.alert.isAlertVisible;
  }

  imgSrc = '../assets/photos/misc/btnEmptyDisabled.png';


  pickName(event: Event) {
    // console.log(event)
    this.dataStorageService.startingValues.enteredName = (<HTMLInputElement>event.target).value;


    if (this.dataStorageService.startingValues.enteredName.length >= 3) {
      this.imgSrc = '../assets/photos/misc/btnEmptyFocus.png'

    } else {
      this.imgSrc = '../assets/photos/misc/btnEmptyDisabled.png'
    }

  }

  showName() {
    if (this.dataStorageService.startingValues.enteredName.length >= 3) {
      this.dataStorageService.startingValues.isNameVisible = true;
      this.appRoutes.navigate([this.dataStorageService.startingValues.characterClass.toLocaleLowerCase() + '/equipment'])
      this.dataStorageService.startingValues.navOpacity = '1';
      this.dataStorageService.startingValues.navAnimation = '1';
      this.dataStorageService.startingValues.navActive = '1';
    }
  }
}
