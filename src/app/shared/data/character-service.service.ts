import { Injectable } from '@angular/core';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private selectedCharacters: Character[] = [];

  addSelectedCharacter(character: Character) {
    this.selectedCharacters.push(character);
  }

  getSelectedCharacters() {
    return this.selectedCharacters;
  }

  clearSelectedCharacters() {
    this.selectedCharacters = [];
  }
}