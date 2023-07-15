import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/data-storage.service';
import { skillData } from './skills-database';
import { SkillSelectionService } from './skill-selection.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  get selectedSkills() {
    return this.activeSkillService.selectedSkills;
  }
  get skillsLeft() {
    return this.activeSkillService.skillsLeft
  }

  characterName: string = this.dataStorageService.startingValues.name

  ngOnInit() {
    this.characterName = this.dataStorageService.startingValues.name;
  }


  constructor(public dataStorageService: DataStorageService, private activeSkillService: SkillSelectionService) { }

  skills = skillData;


  noSkillsLeft: boolean = false;

  chosenSkill: number[] = this.dataStorageService.startingValues.chosenSkills;





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