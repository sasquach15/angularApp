import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data/data-storage.service';
import { AuthService } from '../router-container/router-items/log-in/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {


  private userSub: Subscription = new Subscription;



  constructor(private dataStorageService: DataStorageService, public authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.authService.isAuthenticated = !!user;
    })
  };



  get startingValues() {
    return this.dataStorageService.startingValues;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
