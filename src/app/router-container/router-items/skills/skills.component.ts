import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service-service';
import { skillData } from './skills-database';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  characterName: string = this.serviceService.startingValues.name

  ngOnInit() {
    this.characterName = this.serviceService.startingValues.name;
  }


  constructor(public serviceService: ServiceService) { }

  skills = skillData;

  skillsLeft: number = 3
  noSkillsLeft: boolean = false;

  chosenSkill: number[] = this.serviceService.startingValues.chosenSkills;


  selectedSkills: boolean[] = Array(9).fill(false);


  selectSkill(index: number) {
    const isSelected = this.selectedSkills[index];
    const skillIndex = this.chosenSkill.indexOf(index);

    if (isSelected && skillIndex !== -1) {
      this.chosenSkill.splice(skillIndex, 1);
    } else if (!isSelected && this.skillsLeft > 0) {
      this.chosenSkill.push(index);
    }

    this.selectedSkills[index] = !isSelected;

    if (this.selectedSkills[index] === true && this.skillsLeft === 0) {
      console.log("No more points available!")
      this.noSkillsLeft = true
      setTimeout(() => {
        this.noSkillsLeft = false;
      }, 2000);
      console.log(this.noSkillsLeft);
    }
    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {

      if (this.selectedSkills[index] === false && this.skillsLeft < 3) {
        this.skillsLeft++;
        this.noSkillsLeft = false;
      }
      if (this.selectedSkills[index] === true && this.skillsLeft > 0) {
        this.skillsLeft--;

      } else {
        this.selectedSkills[index] = false;
      }
    }
    console.log(this.chosenSkill)


  }

}