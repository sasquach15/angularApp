import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service-service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(public serviceService: ServiceService) { }

  get name() {
    return this.serviceService.startingValues.name;
  }

}
