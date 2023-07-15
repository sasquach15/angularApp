import { Component, Input } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { EquipmentComponent } from '../router-container/router-items/equipment/equipment.component';
import { EquipmentServiceService } from '../router-container/router-items/equipment/equipment-service.service';



@Component({
  selector: 'app-character-window',
  templateUrl: './character-window.component.html',
  styleUrls: ['./character-window.component.css'],
  //providers: [ServiceService]
})
export class CharacterWindowComponent {

  constructor(private dataStorageService: DataStorageService, private equipmentService: EquipmentServiceService) { }


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
    this.dataStorageService.startingValues.name = "NECROMANCER"
    this.dataStorageService.startingValues.charNumber = "4"
    if (this.activeClass !== '2') {
      this.activeClass = '2'
    } else {
      this.activeClass = '';
      this.dataStorageService.startingValues.charNumber = "1";
    }
  }
  pickAssa() {
    this.dataStorageService.startingValues.name = "ASSASSIN"
    this.dataStorageService.startingValues.charNumber = "5";
    if (this.activeClass !== '3') {
      this.activeClass = '3'
    } else {
      this.activeClass = '';
      this.dataStorageService.startingValues.charNumber = "1";
    }
  }
  pickBarb() {
    this.dataStorageService.startingValues.name = "BARBARIAN"
    this.dataStorageService.startingValues.charNumber = "6";
    if (this.activeClass !== '4') {
      this.activeClass = '4'
    } else {
      this.activeClass = '';
      this.dataStorageService.startingValues.charNumber = "1";
    }
  }





}
