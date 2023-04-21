import { Component, OnInit, Output } from '@angular/core';
import { ServiceService } from 'src/app/service-service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {

  showArmors = false;
  public lightArmorPicked = false;
  mediumArmorPicked = false;
  heavyArmorPicked = false;

  constructor(public serviceService: ServiceService) { }

  get startingValues() {
    return this.serviceService.startingValues;
  }

  showArmor() {
    this.showArmors = !this.showArmors;
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

}
