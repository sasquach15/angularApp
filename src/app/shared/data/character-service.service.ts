import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  constructor(private dataStorageService: DataStorageService) { }

  fetchedCharImg: string = '';
  charClass: string = '';

  selectFetchedCharacter(character: Character) {
    const selectedCharacterName = character.name;
    console.log(selectedCharacterName);
    this.dataStorageService.startingValues.enteredName = selectedCharacterName;
    this.dataStorageService.startingValues.selectedCharacter = '';
    this.fetchedCharImg = character.image;
    console.log(this.fetchedCharImg)
    this.charClass = character.charClass;
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