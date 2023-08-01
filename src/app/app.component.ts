import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from './shared/data/data-storage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private appRoutes: Router, private statService: DataStorageService) { }
  title = 'cvApp';

  ngOnInit(): void {
    this.appRoutes.navigate(['']);

  }
}
