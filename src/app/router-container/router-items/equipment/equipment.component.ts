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
  showHelmets = false;



  constructor(public serviceService: ServiceService, private equipmentService: EquipmentServiceService) { }


  get equipment() {
    return this.equipmentService.equipment;
  }
  /* get armorType() {
    return this.equipmentService.equipment.armorType;
  } */
  get startingValues() {
    return this.serviceService.startingValues;
  }
  /*  get itemPicked() {
     return this.equipmentService.equipment.weaponPicked;
   } */

  showHelmet() {
    this.showHelmets = !this.showHelmets;
    this.showWeapons = false;
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
    this.equipmentService.equipment.armorType = 'light'
    this.showArmors = false;
    this.serviceService.startingValues.selectedCharacter = ''
  }
  pickMediumArmor() {
    this.equipmentService.equipment.armorType = 'medium'
    this.showArmors = false;
    this.serviceService.startingValues.selectedCharacter = ''
  }
  pickHeavyArmor() {
    this.equipmentService.equipment.armorType = 'heavy'
    this.showArmors = false;
    this.serviceService.startingValues.selectedCharacter = ''
  }
  pickClaws() {
    this.equipmentService.equipment.weaponPicked = 'claws'
    this.showWeapons = false;
  }
  pickAxe() {
    this.equipmentService.equipment.weaponPicked = 'axe'
    this.showWeapons = false;
  }
  pickCristalSword() {
    this.equipmentService.equipment.weaponPicked = 'cristalSword'
    this.showWeapons = false;

  }
  pickFlail() {
    this.equipmentService.equipment.weaponPicked = 'flail'
    this.showWeapons = false;
  }
  pickTiara() {
    this.equipmentService.equipment.helmPicked = 'tiara'
    this.showHelmets = false;
  }
  pickCrown() {
    this.equipmentService.equipment.helmPicked = 'crown'
    this.showHelmets = false;
  }
  pickRogaty() {
    this.equipmentService.equipment.helmPicked = 'horned'
    this.showHelmets = false;
  }
  pickBone() {
    this.equipmentService.equipment.helmPicked = 'bone'
    this.showHelmets = false;
  }
}
