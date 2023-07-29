import { Component, OnInit } from '@angular/core';
import { AuthService } from '../log-in/auth.service';
import { Character } from 'src/app/character.model';
import { DataStorageService } from 'src/app/data-storage.service';
import { EquipmentServiceService } from '../equipment/equipment-service.service';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../story/story.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  ngOnInit() {

    this.authService.userEmail = this.authService.userEmail;
  }

  constructor(private router: Router, public authService: AuthService, private statService: DataStorageService, private equipmentService: EquipmentServiceService, private http: HttpClient, private storyService: StoryService,) { }

  logOut() {
    this.authService.isAuthenticated = false;
    this.authService.userId = null;
    this.router.navigate(['/login']);
  }

  get skillsList() {
    return this.statService.startingValues.chosenSkills;
  }

  sendModel() {
    const userId = this.authService.userId;

    if (!userId) {
      console.error('Brak userId w AuthService.');
      return;
    }

    const char: Character = {
      name: this.statService.startingValues.enteredName,
      armor: this.equipmentService.equipment.armorType,
      image: `../assets/photos/${this.statService.startingValues.name}/armors/heavy.png`,
      skillsList: this.skillsList.map(skill => skill + 1),
      statList: this.statService.selectedStats,
      story: this.storyService.currentStory,
      userId: userId,
    };

    const queryParams = `?auth=${this.authService.token}`;
    this.http.post(`https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/users.json${queryParams}`, char)
      .subscribe(response => {
        console.log('Sukces!', response);
      });

  }

  fetchCharacter() {
    const userId = this.authService.userId;

    if (!userId) {
      console.error('Brak userId w AuthService.');
      return;
    }

    const queryParams = `?auth=${this.authService.token}`;
    this.http.get<{ [key: string]: Character }>(`https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/users.json${queryParams}`)
      .subscribe(characterData => {


        const characters: Character[] = [];
        for (const key in characterData) {
          if (characterData.hasOwnProperty(key) && characterData[key].userId === userId) {
            characters.push(characterData[key]);
          }
        }

        console.log('Postacie dla zalogowanego użytkownika:', characters);
      });
  }




}
