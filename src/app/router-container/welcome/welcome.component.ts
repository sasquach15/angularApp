import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service-service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }


  get startingValues() {
    return this.serviceService.startingValues;
  }
  ngOnInit(): void {
  }

}
