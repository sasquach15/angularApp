import { Component } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data/data-storage.service';
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



  constructor(public dataStorageService: DataStorageService, private equipmentService: EquipmentServiceService) { }


  get equipment() {
    return this.equipmentService.equipment;
  }

  get startingValues() {
    return this.dataStorageService.startingValues;
  }

  charName = this.dataStorageService.startingValues.characterClass.toLowerCase();

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
    this.equipmentService.equipment.armorUrl = '../assets/photos/armors/leatherArmor.png'
    this.equipmentService.equipment.armorCharUrl = `../assets/photos/${this.charName}/armors/light.png`
    this.equipmentService.equipment.armorType = 'light';
    this.showArmors = false;

  }
  pickMediumArmor() {
    this.equipmentService.equipment.armorUrl = '../assets/photos/armors/ringMail.png'
    this.equipmentService.equipment.armorCharUrl = `../assets/photos/${this.charName}/armors/medium.png`
    this.equipmentService.equipment.armorType = 'medium';
    this.showArmors = false;

  }
  pickHeavyArmor() {
    this.equipmentService.equipment.armorUrl = '../assets/photos/armors/fullPlateMail.png'
    this.equipmentService.equipment.armorCharUrl = `../assets/photos/${this.charName}/armors/heavy.png`
    this.equipmentService.equipment.armorType = 'heavy';
    this.showArmors = false;

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

