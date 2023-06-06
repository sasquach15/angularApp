import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillSelectionService {
  selectedSkills: boolean[] = Array(9).fill(false);
  skillsLeft: number = 3

  constructor() { }

}
