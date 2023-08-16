import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data/data-storage.service';
import { EquipmentServiceService } from '../router-container/router-items/equipment/equipment-service.service';
import { CharacterService } from '../shared/data/character-service.service';




@Component({
  selector: 'app-character-window',
  templateUrl: './character-window.component.html',
  styleUrls: ['./character-window.component.css'],
  //providers: [ServiceService]
})
export class CharacterWindowComponent {

  constructor(public dataStorageService: DataStorageService,
    private equipmentService: EquipmentServiceService,
    public characterService: CharacterService) { }


  get equipment() {
    return this.equipmentService.equipment;
  }
  get startingValues() {
    return this.dataStorageService.startingValues;
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
    this.startingValues.characterClass = "SORCERESS"
    this.startingValues.charNumber = "3";
    if (this.activeClass !== '1') {
      this.startingValues.activeClass = '1'
    } else {
      this.startingValues.activeClass = '';
      this.startingValues.charNumber = "1";
    }

  }
  pickNec() {
    this.dataStorageService.startingValues.characterClass = "NECROMANCER"
    this.dataStorageService.startingValues.charNumber = "4"
    if (this.activeClass !== '2') {
      this.startingValues.activeClass = '2'
    } else {
      this.startingValues.activeClass = '';
      this.dataStorageService.startingValues.charNumber = "1";
    }
  }
  pickAssa() {
    this.dataStorageService.startingValues.characterClass = "ASSASSIN"
    this.dataStorageService.startingValues.charNumber = "5";
    if (this.activeClass !== '3') {
      this.startingValues.activeClass = '3'
    } else {
      this.startingValues.activeClass = '';
      this.dataStorageService.startingValues.charNumber = "1";
    }
  }
  pickBarb() {
    this.dataStorageService.startingValues.characterClass = "BARBARIAN"
    this.dataStorageService.startingValues.charNumber = "6";
    if (this.activeClass !== '4') {
      this.startingValues.activeClass = '4'
    } else {
      this.startingValues.activeClass = '';
      this.dataStorageService.startingValues.charNumber = "1";
    }
  }

  getAssassinHelmUrl(helmPicked: string) {
    const helmUrlMap: { [key: string]: string } = {
      tiara: '../assets/photos/assassin/assaHelmets/assatiara.png',
      crown: '../assets/photos/assassin/assaHelmets/assacrown.png',
      horned: '../assets/photos/assassin/assaHelmets/assarogatyelm.png',
      bone: '../assets/photos/assassin/assaHelmets/assabonehelm.png',
    };
    return helmUrlMap[helmPicked] || '';
  }

  getAssassinHelmClass(helmPicked: string) {
    const helmClassMap: { [key: string]: string } = {
      tiara: 'assaHelmets assaTiara',
      crown: 'assaHelmets assaCrown',
      horned: 'assaHelmets assaHorned',
      bone: 'assaHelmets assaBone',
    };
    return helmClassMap[helmPicked] || '';
  }
  getAssassinWeaponUrl(weaponPicked: string) {
    const weaponUrlMap: { [key: string]: string } = {
      claws: '../assets/photos/assassin/assaWeapons/assapazury.png',
      cristalSword: '../assets/photos/assassin/assaWeapons/assakrysztalowymiecz.png',
      flail: '../assets/photos/assassin/assaWeapons/assakorbacz.png',
      axe: '../assets/photos/assassin/assaWeapons/assaaxe.png',
    };
    return weaponUrlMap[weaponPicked] || '';
  }

  getAssassinWeaponClass(weaponPicked: string) {
    const weaponClassMap: { [key: string]: string } = {
      claws: 'assaWeapons assaClaws',
      cristalSword: 'assaWeapons assaCristal',
      flail: 'assaWeapons assaFlail',
      axe: 'assaWeapons assaAxe',
    };
    return weaponClassMap[weaponPicked] || '';
  }

}
