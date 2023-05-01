import { Component, Input } from '@angular/core';
import { ServiceService } from '../service-service';
import { EquipmentComponent } from '../router-container/router-items/equipment/equipment.component';
import { EquipmentServiceService } from '../router-container/router-items/equipment/equipment-service.service';


@Component({
  selector: 'app-character-window',
  templateUrl: './character-window.component.html',
  styleUrls: ['./character-window.component.css'],
  //providers: [ServiceService]
})
export class CharacterWindowComponent {

  constructor(private serviceService: ServiceService, private equipmentService: EquipmentServiceService) { }


  get equipment() {
    return this.equipmentService.equipment;
  }
  /* get itemPicked() {
    return this.equipmentService.equipment.weaponPicked;
  }
  get armorType() {
    return this.equipmentService.equipment.armorType;
  } */

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
  pickBarb() {
    this.serviceService.startingValues.name = "BARBARIAN"
    this.serviceService.startingValues.charNumber = "6";
    if (this.activeClass !== '4') {
      this.activeClass = '4'
    } else {
      this.activeClass = '';
      this.serviceService.startingValues.charNumber = "1";
    }
  }





}
