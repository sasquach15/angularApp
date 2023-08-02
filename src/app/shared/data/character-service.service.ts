import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  constructor(private dataStorageService: DataStorageService) { }

  fetchedCharImg: string = '';

  selectFetchedCharacter(character: Character) {
    const selectedCharacterName = character.name;
    console.log(selectedCharacterName);
    this.dataStorageService.startingValues.enteredName = selectedCharacterName;
    this.dataStorageService.startingValues.selectedCharacter = '';
    this.fetchedCharImg = character.image;
    console.log(this.fetchedCharImg)
  }

}