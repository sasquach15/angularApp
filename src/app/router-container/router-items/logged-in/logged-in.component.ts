import { Component, OnInit } from '@angular/core';
import { AuthService } from '../log-in/auth.service';
import { Character } from 'src/app/shared/data/character.model';
import { DataStorageService } from 'src/app/shared/data/data-storage.service';
import { EquipmentServiceService } from '../equipment/equipment-service.service';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../story/story.service';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/shared/data/character-service.service';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  ngOnInit() {

    this.authService.userEmail = this.authService.userEmail;
  }

  characters: Character[] = [];

  constructor(private router: Router,
    public authService: AuthService,
    private statService: DataStorageService,
    private equipmentService: EquipmentServiceService,
    private http: HttpClient,
    private storyService: StoryService,
    public characterService: CharacterService
  ) { }

  logOut() {
    this.authService.isAuthenticated = false;
    this.authService.userId = null;
    this.router.navigate(['/login']);
  }

  get skillsList() {
    return this.statService.chosenSkills;
  }

  saveCharacter() {
    const userId = this.authService.userId;

    if (!userId) {
      console.error('Brak userId w AuthService.');
      return;
    }
    const armorType = this.equipmentService.equipment.armorType;
    const characterId = uuidv4();

    const char: Character = {
      name: this.statService.startingValues.enteredName,
      charClass: this.statService.startingValues.characterClass,
      armor: this.equipmentService.equipment.armorType,
      image: `../assets/photos/${this.statService.startingValues.characterClass}/armors/${armorType}.png`,
      skillsList: this.skillsList.map(skill => skill + 1),
      statList: this.statService.selectedStats,
      story: this.storyService.currentStory,
      userId: userId,
      characterId: characterId, // Przekaż unikalny identyfikator
    };

    const queryParams = `?auth=${this.authService.token}`;
    this.http.post(`https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/users.json${queryParams}`, char)
      .subscribe(response => {
        console.log('Sukces!', response);
      });
  }

  fetchCharacter() {
    console.log('Pobieranie postaci...');

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
        this.characters = characters;
        console.log('Pobrano postaci:', characters);
      });
  }


  deleteCharacter(characterId: string) {


    const queryParams = `?auth=${this.authService.token}`;

    // url działa poprawnie, characterId tez jest przekazywane dobrze.
    const charUrl = 'https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/users/' + characterId + '.json' + queryParams;

    console.log('Char URL to delete:', charUrl);


    this.http.delete(charUrl).subscribe(
      response => {
        console.log('Próba usunięcią postaci o id:', characterId)
        console.log('Postać została usunięta.', response);
        // Aktualizuje listę postaci po usunięciu
        this.fetchCharacter();
      },
      error => {
        console.error('Błąd podczas usuwania postaci.', error);
      });
  }
}

