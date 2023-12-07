import { Component, OnInit } from '@angular/core';
import { AuthService } from '../log-in/auth.service';
import { Character } from 'src/app/shared/data/character.model';
import { DataStorageService } from 'src/app/shared/data/data-storage.service';
import { EquipmentServiceService } from '../equipment/equipment-service.service';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../story/story.service';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/shared/data/character-service.service';
import { AlertServiceService } from 'src/app/alert/alert-service.service';
import { SkillSelectionService } from '../skills/skill-selection.service';

interface ResponseType {
  name: string;
}

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css'],
})
export class LoggedInComponent implements OnInit {
  ngOnInit() {
    this.authService.userEmail = this.authService.userEmail;
  }

  characters: Character[] = [];

  constructor(
    private router: Router,
    public authService: AuthService,
    private dataStorageService: DataStorageService,
    private equipmentService: EquipmentServiceService,
    private http: HttpClient,
    private storyService: StoryService,
    public characterService: CharacterService,
    private alert: AlertServiceService,
    private skillService: SkillSelectionService
  ) {}

  logOut() {
    this.authService.isAuthenticated = false;
    this.authService.userId = null;
    this.router.navigate(['/login']);
  }

  get skillsList() {
    return this.dataStorageService.chosenSkills;
  }

  saveCharacter() {
    const userId = this.authService.userId;

    if (!userId) {
      console.error('Brak userId w AuthService.');
      return;
    }
    const armorType = this.equipmentService.equipment.armorType;

    const char: Character = {
      name: this.dataStorageService.startingValues.enteredName,
      charClass: this.dataStorageService.startingValues.characterClass,
      armor: this.equipmentService.equipment.armorType,
      image: `../assets/photos/${this.dataStorageService.startingValues.characterClass}/armors/${armorType}.png`,
      skillsList: this.skillsList.map((skill) => skill + 1),
      statList: this.dataStorageService.selectedStats,
      story: this.storyService.currentStory,
      userId: userId,
      firebaseCharID: this.characterService.firebaseCharID,
    };

    const queryParams = `?auth=${this.authService.token}`;

    if (this.dataStorageService.initialStatPoints != 0) {
      this.alert.statAlert = true;
      this.alert.isAlertVisible = true;
    } else if (this.skillService.skillsLeft != 0) {
      this.alert.isAlertVisible = true;
      this.alert.skillAlert = true;
    } else if (this.storyService.currentStory.length < 120) {
      this.alert.isAlertVisible = true;
      this.alert.storyAlert = true;
    } else {
      this.http
        .post<ResponseType>(
          `https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/characters.json${queryParams}`,
          char
        )
        .subscribe((response) => {
          this.characterService.firebaseCharID = response.name; // Otrzymujemy identyfikator po zapisaniu obiektu.
          char.firebaseCharID = this.characterService.firebaseCharID; // Dodaj identyfikator do obiektu char.

          // aktualizacja obiektu w bazie danych o zwrócony identyfikator firebase
          this.http
            .put(
              `https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/characters/${this.characterService.firebaseCharID}.json`,
              char
            )
            .subscribe(() => {
              console.log('Obiekt zidentyfikowany i zaktualizowany.');
            });

          console.log('Sukces!', this.characterService.firebaseCharID);
          this.dataStorageService.firebaseCharacterIDs.push(
            this.characterService.firebaseCharID
          );
          console.log(
            'ID w tablicy to:',
            this.dataStorageService.firebaseCharacterIDs
          );
        });
    }
  }

  fetchCharacter() {
    console.log('Pobieranie postaci...');

    const userId = this.authService.userId;
    const queryParams = `?auth=${this.authService.token}`;
    this.http
      .get<{ [key: string]: Character }>(
        `https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/characters.json${queryParams}`
      )
      .subscribe((characterData) => {
        const characters: Character[] = [];
        for (const key in characterData) {
          if (
            characterData.hasOwnProperty(key) &&
            characterData[key].userId === userId
          ) {
            characters.push(characterData[key]);
          }
        }
        this.characters = characters;
        console.log('Fetched Character:', characters);
      });
  }

  deleteCharacter() {
    const queryParams = `?auth=${this.authService.token}`;

    const charUrl = `https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/characters/${this.characterService.firebaseCharID}.json${queryParams}`;

    console.log('Char URL to delete:', charUrl);

    this.http.delete(charUrl).subscribe(
      (response) => {
        console.log('Character deleted successfully.', response);

        this.fetchCharacter();
      },
      (error) => {
        console.error('Error while trying to delete character.', error);
      }
    );
  }
}
