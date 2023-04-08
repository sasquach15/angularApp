import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service-service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  constructor(public serviceService: ServiceService) { }

  get name() {
    return this.serviceService.startingValues.name;
  }
}
