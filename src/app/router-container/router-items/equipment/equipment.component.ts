import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service-service';
import { EquipmentServiceService } from './equipment-service.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {

  showWeapons = false;
  showArmors = false;



  constructor(public serviceService: ServiceService, private equipmentService: EquipmentServiceService) { }

  get armorType() {
    return this.equipmentService.armorType;
  }
  get startingValues() {
    return this.serviceService.startingValues;
  }
  get itemPicked() {
    return this.equipmentService.itemPicked;
  }

  showArmor() {
    this.showArmors = !this.showArmors;
    this.showWeapons = false;
  }
  showWeapon() {
    this.showWeapons = !this.showWeapons;
    this.showArmors = false;

  }
  pickLightArmor() {
    this.equipmentService.armorType = 'light'
    this.showArmors = false;
    this.serviceService.startingValues.selectedCharacter = "7"
  }
  pickMediumArmor() {
    this.equipmentService.armorType = 'medium'
    this.showArmors = false;
    this.serviceService.startingValues.selectedCharacter = "8"
  }
  pickHeavyArmor() {
    this.equipmentService.armorType = 'heavy'
    this.showArmors = false;
    this.serviceService.startingValues.selectedCharacter = "9"
  }
  pickClaws() {
    this.equipmentService.itemPicked = 'claws'
    this.showWeapons = false;
  }
  pickScimitar() {
    this.equipmentService.itemPicked = 'scimitar'
    this.showWeapons = false;
  }
  pickCristalSword() {
    this.equipmentService.itemPicked = 'cristalSword'
    this.showWeapons = false;

  }
  pickFlail() {
    this.equipmentService.itemPicked = 'flail'
    this.showWeapons = false;
  }

}
