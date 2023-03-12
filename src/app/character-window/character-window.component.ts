import { Component } from '@angular/core';
import { ServiceService } from '../service-service';


@Component({
  selector: 'app-character-window',
  templateUrl: './character-window.component.html',
  styleUrls: ['./character-window.component.css'],
  //providers: [ServiceService]
})
export class CharacterWindowComponent {

  constructor(public serviceService: ServiceService) { }

  get startingValues() {
    return this.serviceService.startingValues;
  }

  btnActive = true;
  activeClass = '';

  letsStart() {
    this.startingValues.chooseChar = true;
    this.btnActive = false;
  }

  changeMsg() {
    this.startingValues.welcomeMessage = !this.startingValues.welcomeMessage;
    this.startingValues.charNumber = "1"
  }

  pickSorc() {
    this.startingValues.name = "SORCERESS"
    this.startingValues.charNumber = "3";
    if (this.activeClass !== '1') {
      this.activeClass = '1'
    } else {
      this.activeClass = '';
      this.startingValues.charNumber = "1";
    }

  }
  pickNec() {
    this.serviceService.startingValues.name = "NECROMANCER"
    this.serviceService.startingValues.charNumber = "4"
    if (this.activeClass !== '2') {
      this.activeClass = '2'
    } else {
      this.activeClass = '';
      this.serviceService.startingValues.charNumber = "1";
    }
  }
  pickAssa() {
    this.serviceService.startingValues.name = "ASSASSIN"
    this.serviceService.startingValues.charNumber = "5";
    if (this.activeClass !== '3') {
      this.activeClass = '3'
    } else {
      this.activeClass = '';
      this.serviceService.startingValues.charNumber = "1";
    }
  }
  pickAma() {
    this.serviceService.startingValues.name = "AMAZON"
    this.serviceService.startingValues.charNumber = "6";
    if (this.activeClass !== '4') {
      this.activeClass = '4'
    } else {
      this.activeClass = '';
      this.serviceService.startingValues.charNumber = "1";
    }
  }





}
