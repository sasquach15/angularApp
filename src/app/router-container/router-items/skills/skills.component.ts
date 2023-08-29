import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data/data-storage.service';
import { skillData } from './skills-database';
import { SkillSelectionService } from './skill-selection.service';
import { CharacterService } from 'src/app/shared/data/character-service.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(
    public dataStorageService: DataStorageService,
    private activeSkillService: SkillSelectionService,
    private characterServicec: CharacterService
  ) { }


  get selectedSkills() {
    return this.activeSkillService.selectedSkills;
  }
  get skillsLeft() {
    return this.activeSkillService.skillsLeft
  }

  characterClass: string = this.dataStorageService.startingValues.characterClass
  chosenSkill: number[] = this.dataStorageService.chosenSkills;
  skills = skillData;
  noSkillsLeft: boolean = false;

  ngOnInit() {
    console.log(this.characterClass)
    if (!this.dataStorageService.currentCharacter) {
      this.characterClass = this.characterServicec.fetchedCharClass;
      /* this.activeSkillService.selectedSkills = this.characterServicec.fetchedCharacterSkills; */
      this.activeSkillService.selectedSkills = this.characterServicec.fetchedCharacterSkills.slice();

      console.log(this.characterServicec.fetchedCharacterSkills)
      this.activeSkillService.skillsLeft = 0;
      console.log(this.characterClass)
    }

  }



  selectSkill(index: number) {

    const isSelected = this.activeSkillService.selectedSkills[index];
    const skillIndex = this.chosenSkill.indexOf(index);

    if (isSelected && skillIndex !== -1) {
      this.chosenSkill.splice(skillIndex, 1);
    } else if (!isSelected && this.skillsLeft > 0) {
      this.chosenSkill.push(index);
    }

    this.activeSkillService.selectedSkills[index] = !isSelected;

    if (this.activeSkillService.selectedSkills[index] === true && this.skillsLeft === 0) {
      this.noSkillsLeft = true
      setTimeout(() => {
        this.noSkillsLeft = false;
      }, 2000);
      console.log(this.noSkillsLeft);
    }
    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {

      if (this.activeSkillService.selectedSkills[index] === false && this.skillsLeft < 3) {
        this.activeSkillService.skillsLeft++;
        this.noSkillsLeft = false;
      }
      if (this.activeSkillService.selectedSkills[index] === true && this.skillsLeft > 0) {
        this.activeSkillService.skillsLeft--;

      } else {
        this.activeSkillService.selectedSkills[index] = false;
      }
    }
    console.log(this.chosenSkill)


  }

}