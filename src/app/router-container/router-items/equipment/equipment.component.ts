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
  showShields = false;



  constructor(public serviceService: ServiceService, private equipmentService: EquipmentServiceService) { }


  get equipment() {
    return this.equipmentService.equipment;
  }

  get startingValues() {
    return this.serviceService.startingValues;
  }

  charName = this.serviceService.startingValues.name.toLowerCase();

  showHelmet() {
    this.showHelmets = !this.showHelmets;
    this.showWeapons = false;
    this.showShields = false;
    this.showArmors = false;
  }
  showArmor() {
    this.showArmors = !this.showArmors;
    this.showWeapons = false;
    this.showHelmets = false;
    this.showShields = false;
  }
  showWeapon() {
    this.showWeapons = !this.showWeapons;
    this.showArmors = false;
    this.showShields = false;
    this.showHelmets = false;

  }
  showShield() {
    this.showShields = !this.showWeapons;
    this.showWeapons = false;
    this.showArmors = false;
    this.showHelmets = false;
  }

  pickLightArmor() {
    /* this.equipmentService.equipment.armorType = 'light' */
    this.equipmentService.equipment.armorUrl = '../assets/photos/armors/leatherArmor.png'
    this.equipmentService.equipment.armorCharUrl = `../assets/photos/${this.charName}/armors/light.png`
    this.showArmors = false;
    this.serviceService.startingValues.selectedCharacter = ''
  }
  pickMediumArmor() {
    this.equipmentService.equipment.armorUrl = '../assets/photos/armors/ringMail.png'
    this.equipmentService.equipment.armorCharUrl = `../assets/photos/${this.charName}/armors/medium.png`
    this.showArmors = false;
    this.serviceService.startingValues.selectedCharacter = ''
  }
  pickHeavyArmor() {
    this.equipmentService.equipment.armorUrl = '../assets/photos/armors/fullPlateMail.png'
    this.equipmentService.equipment.armorCharUrl = `../assets/photos/${this.charName}/armors/heavy.png`
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
  pickBoneShield() {
    this.equipmentService.equipment.shieldPicked = 'boneShield'
    this.showShields = false;
  }
  pickBarbedShield() {
    this.equipmentService.equipment.shieldPicked = 'barbedShield'
    this.showShields = false;
  }
  pickPavise() {
    this.equipmentService.equipment.shieldPicked = 'pavise'
    this.showShields = false;
  }
}
