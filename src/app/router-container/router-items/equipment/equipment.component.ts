import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service-service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {

  constructor(public serviceService: ServiceService) { }

  get startingValues() {
    return this.serviceService.startingValues;
  }



}
