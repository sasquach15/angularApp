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
    // ...
    // Pobierz wartość characterName z odpowiedniego miejsca i przypisz do zmiennej
    this.characterName = this.serviceService.startingValues.name;
    // ...
  }


  constructor(public serviceService: ServiceService) { }

  selectedSkills: boolean[] = [false, false, false, false, false, false, false, false, false]

  skills = skillData;

  skillsLeft: number = 3
  noSkillsLeft: boolean = false;

  chosenSkill: number[] = this.serviceService.startingValues.chosenSkills;

  get name() {
    return this.serviceService.startingValues.name;
  }

  selectSkill(index: number) {
    this.selectedSkills[index] = !this.selectedSkills[index];

    const skillIndex = this.chosenSkill.indexOf(index)
    if (skillIndex !== -1) {
      this.chosenSkill.splice(skillIndex, 1)
    } else if (this.skillsLeft > 0) {
      this.chosenSkill.push(index)
    }

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