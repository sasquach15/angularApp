import { Injectable } from '@angular/core';
import { Stat } from 'src/app/router-container/router-items/statistics/stat-interface';
import { Character } from './character.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const DEFAULT_STAT_POINTS = 20;

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  chosenSkills: number[] = [];
  currentCharacter: boolean = true;

  startingValues = {
    chooseChar: false,
    welcomeMessage: true,
    charNumber: "0",
    navActive: "",
    selectedCharacter: "0",
    navOpacity: "0",
    navTouched: "",
    navAnimation: '0',
    characterClass: 'null',
    enteredName: '',
    isNameVisible: false,
    activeClass: '',
  }

  private charactersUrl = 'https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app/users.json';
  private characters: Character[] = [];



  // STATISTICS

  selectedStats: Stat[] = [];
  initialStatPoints: number = DEFAULT_STAT_POINTS;

  private initialStats: Stat[] = [];

  private stats: Stat[] = [
    { name: 'STRENGTH', value: 10, statPoints: DEFAULT_STAT_POINTS },
    { name: 'DEXTERITY', value: 15, statPoints: DEFAULT_STAT_POINTS },
    { name: 'VITALITY', value: 20, statPoints: DEFAULT_STAT_POINTS },
    { name: 'WISDOM', value: 10, statPoints: DEFAULT_STAT_POINTS },
    { name: 'CHARISMA', value: 10, statPoints: DEFAULT_STAT_POINTS }
  ];

  constructor(private http: HttpClient) {
    this.initializeStats();
  }

  getStats(): Stat[] {
    return this.stats;
  }

  getSelectedStats(): Stat[] {
    return this.selectedStats;
  }

  initializeStats(): Stat[] {
    this.selectedStats = [
      { name: 'STRENGTH', value: 10, statPoints: 20 },
      { name: 'DEXTERITY', value: 15, statPoints: 20 },
      { name: 'VITALITY', value: 20, statPoints: 20 },
      { name: 'WISDOM', value: 10, statPoints: 20 },
      { name: 'CHARISMA', value: 10, statPoints: 20 }
    ];

    return this.selectedStats;
  }
  resetSelectedStats(): void {
    this.selectedStats = this.stats.map(stat => ({ ...stat }));
  }

  restoreInitialValues(): void {
    this.selectedStats = this.initialStats.map(stat => ({ ...stat }));
  }
  fetchCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl);
  }

  setCharacters(characters: Character[]) {
    this.characters = characters;
  }


  getCharacters(): Character[] {
    return this.characters;
  }

}




