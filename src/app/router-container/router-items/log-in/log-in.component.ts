import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Character } from 'src/app/character.model';
import { ServiceService } from 'src/app/service-service';
import { EquipmentServiceService } from '../equipment/equipment.component';
import { DataStorageService } from 'src/app/data-storage.service';
import { StoryService } from '../story/story.service';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  isLoginIn: boolean = false;
  isLoading: boolean = false;
  error: string = '';

  onSwitchMode() {
    this.isLoginIn = !this.isLoginIn;
  }

  constructor(private router: Router, public authService: AuthService, private storyService: StoryService, private http: HttpClient, private serviceService: ServiceService, private equipmentSevice: EquipmentServiceService, private statService: DataStorageService) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }

    const email = form.value.email
    const password = form.value.password


    let authObservable: Observable<AuthResponseData>

    this.isLoading = true;
    if (this.isLoginIn) {

      authObservable = this.authService.signUp(email, password)
      console.log('sign')

    } else {
      authObservable = this.authService.login(email, password)
      console.log('log')
    }

    authObservable.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        /* this.router.navigate(['/loggedIn']) */
      },
      errorMessage => {
        console.log(errorMessage)
        this.error = errorMessage;
        this.isLoading = false;
      }
    );


    form.reset();
  }

  get skillsList() {
    return this.serviceService.startingValues.chosenSkills;
  }

  logOut() {
    this.authService.isAuthenticated = false;
  }


  sendModel() {
    const stats = this.statService.getStats();
    const char: Character = {
      name: this.serviceService.startingValues.enteredName,
      armor: this.equipmentSevice.equipment.armorType,
      image: `../assets/photos/${this.serviceService.startingValues.name}/armors/heavy.png`,
      skillsList: this.skillsList.map(skill => skill + 1),
      statList: this.statService.selectedStats,
      story: this.storyService.currentStory

    }
    this.http.post('https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/users.json', char).subscribe(response => {
      console.log('Sukces!', response)
    })
  }

  storeData(postData: { username: string; email: string }) {
    console.log(postData)
    this.http.post('https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/users.json', postData).subscribe(responseData => {
      console.log(responseData)
    })
  }

  onFetchUsername() {
    this.fetchUsername();
  }

  private fetchUsername() {
    this.http.get('https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/users.json')
      .subscribe(username => {
        console.log(username)
      })

  }

}
