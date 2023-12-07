import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { DataStorageService } from './data-storage.service';
import { Stat } from 'src/app/router-container/router-items/statistics/stat-interface';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/router-container/router-items/log-in/auth.service';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

interface CharacterData {
  firebaseCharID: string;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(
    private dataStorageService: DataStorageService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  fetchedCharImg: string = '';
  fetchedCharClass: string = '';
  fetchedCharStatList: Stat[] = [];
  fetchedCharacterSkills: any = [];
  fetchedCharacterStory: string = '';
  firebaseCharID: any = '';
  isCharActive: boolean = false;

  selectFetchedCharacter(character: Character) {
    const queryParams = `?auth=${this.authService.token}`;
    const charUrl = `https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/characters/${character.firebaseCharID}.json${queryParams}`;

    // Wykonujemy żądanie GET i czekamy na zakończenie
    this.http
      .get<CharacterData>(charUrl)
      .pipe(
        switchMap((data) => {
          // Tutaj możesz wykonać dowolne operacje na danych, jeśli to konieczne
          this.firebaseCharID = data.firebaseCharID;
          return this.processCharacterSelection(character);
        })
      )
      .subscribe(
        () => {
          // Tutaj możesz dodać kod, który ma być wykonany po zakończeniu procesu
        },
        (error) => {
          console.error(
            'Error while trying to retrieve character data.',
            error
          );
        }
      );
  }

  private processCharacterSelection(character: Character): Observable<any> {
    const selectedCharacterName = character.name;
    this.dataStorageService.startingValues.enteredName = selectedCharacterName;
    this.dataStorageService.startingValues.selectedCharacter = '99';
    this.fetchedCharImg = character.image;
    this.dataStorageService.currentCharacter = false;
    this.fetchedCharClass = character.charClass;
    console.log(this.fetchedCharClass);
    this.fetchedCharStatList = character.statList;
    this.fetchedCharacterSkills = character.skillsList;
    this.firebaseCharID;
    this.isCharActive = !this.isCharActive;
    console.log(this.firebaseCharID);

    // Możemy użyć operatora 'of' do zwrócenia pustego Observable jako wartości zakończenia
    return of(null);
  }

  get charClassCss(): string {
    switch (this.fetchedCharClass) {
      case 'SORCERESS':
        return 'sorcNaked';
      case 'NECROMANCER':
        return 'necNaked';
      case 'ASSASSIN':
        return 'assaNaked';
      case 'BARBARIAN':
        return 'barbNaked';

      default:
        return '';
    }
  }
}
