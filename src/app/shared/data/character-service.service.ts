import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { DataStorageService } from './data-storage.service';
import { Stat } from 'src/app/router-container/router-items/statistics/stat-interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  constructor(private dataStorageService: DataStorageService) { }

  fetchedCharImg: string = '';
  charClass: string = '';
  statList: Stat[] = [];
  characterSkills: number[] = []
  characterStory: string = ''


  selectFetchedCharacter(character: Character) {
    const selectedCharacterName = character.name;
    console.log(selectedCharacterName);
    this.dataStorageService.startingValues.enteredName = selectedCharacterName;
    this.dataStorageService.startingValues.selectedCharacter = '';
    this.fetchedCharImg = character.image;
    console.log(this.fetchedCharImg)
    this.charClass = character.charClass;
    this.statList = character.statList;
    this.characterSkills = character.skillsList;
    this.characterStory = character.story;
  }

  get charClassCss(): string {
    switch (this.charClass) {
      case 'SORCERESS':
        return 'sorcNaked';
      case 'NECROMANCER':
        return 'necNaked';
      case 'ASSASSIN':
        return 'assaNaked';
      case 'BARBARIAN':
        return 'barbNaked';

      default:
        return ''
    }
  }

}