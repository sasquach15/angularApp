import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service-service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {

  constructor(public serviceService: ServiceService) { }

  get name() {
    return this.serviceService.startingValues.name;
  }

}
