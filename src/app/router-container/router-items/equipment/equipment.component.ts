import { Component, OnInit, Output } from '@angular/core';
import { ServiceService } from 'src/app/service-service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {

  showWeapons = false;
  showArmors = false;
  lightArmorPicked = false;
  mediumArmorPicked = false;
  heavyArmorPicked = false;
  clawsPicked = false;
  scimitarPicked = false;
  cristalSwordPicked = false;
  flailPicked = false;

  constructor(public serviceService: ServiceService) { }

  get startingValues() {
    return this.serviceService.startingValues;
  }

  showArmor() {
    this.showArmors = !this.showArmors;
  }
  showWeapon() {
    this.showWeapons = !this.showWeapons;

  }
  pickLightArmor() {
    this.lightArmorPicked = true;
    this.showArmors = false;
    this.heavyArmorPicked = false;
    this.mediumArmorPicked = false;
    this.serviceService.startingValues.selectedCharacter = "7"
  }
  pickMediumArmor() {
    this.mediumArmorPicked = true;
    this.showArmors = false;
    this.lightArmorPicked = false;
    this.heavyArmorPicked = false;
    this.serviceService.startingValues.selectedCharacter = "8"
  }
  pickHeavyArmor() {
    this.heavyArmorPicked = true;
    this.showArmors = false;
    this.lightArmorPicked = false;
    this.mediumArmorPicked = false;
    this.serviceService.startingValues.selectedCharacter = "9"
  }
  pickClaws() {
    this.clawsPicked = true;
    this.showWeapons = false;
    this.cristalSwordPicked = false;
    this.flailPicked = false;
    this.scimitarPicked = false;
  }
  pickScimitar() {
    this.scimitarPicked = true;
    this.showWeapons = false;
    this.clawsPicked = false;
    this.cristalSwordPicked = false;
    this.flailPicked = false;
  }
  pickCristalSword() {
    this.cristalSwordPicked = true;
    this.showWeapons = false;
    this.scimitarPicked = false;
    this.clawsPicked = false;
    this.flailPicked = false;
  }
  pickFlail() {
    this.flailPicked = true;
    this.showWeapons = false;
    this.scimitarPicked = false;
    this.clawsPicked = false;
    this.cristalSwordPicked = false;

  }

}
