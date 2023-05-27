import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service-service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(public serviceService: ServiceService) { }

  selectedSkill1: boolean = false;
  selectedSkill2: boolean = false;
  selectedSkill3: boolean = false;
  selectedSkill4: boolean = false;
  selectedSkill5: boolean = false;
  selectedSkill6: boolean = false;
  selectedSkill7: boolean = false;
  selectedSkill8: boolean = false;
  selectedSkill9: boolean = false;
  skillsLeft: number = 3





  get name() {
    return this.serviceService.startingValues.name;
  }


  selectSkill() {
    this.selectedSkill1 = !this.selectedSkill1;


    if (this.selectedSkill1 === true && this.skillsLeft === 0) {
      console.log("No more points availabe!")
    }

    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {

      if (this.selectedSkill1 === false && this.skillsLeft < 3) {
        this.skillsLeft++;
      }
      if (this.selectedSkill1 === true && this.skillsLeft > 0) {
        this.skillsLeft--;
      } else {
        this.selectedSkill1 = false;
      }


    }
    console.log(this.skillsLeft)

  }
  selectSkill2() {


    this.selectedSkill2 = !this.selectedSkill2;
    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {
      if (this.selectedSkill2 === true && this.skillsLeft === 0) {
        console.log("No more points availabe!")
      }
      if (this.selectedSkill2 === false && this.skillsLeft < 3) {
        this.skillsLeft++;
      }
      if (this.selectedSkill2 === true && this.skillsLeft > 0) {
        this.skillsLeft--;
      } else {
        this.selectedSkill2 = false;
      }

    }
    console.log(this.skillsLeft)
  }
  selectSkill3() {

    this.selectedSkill3 = !this.selectedSkill3;
    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {
      if (this.selectedSkill3 === true && this.skillsLeft === 0) {
        console.log("No more points availabe!")
      }
      if (this.selectedSkill3 === false && this.skillsLeft < 3) {
        this.skillsLeft++;
      }
      if (this.selectedSkill3 === true && this.skillsLeft > 0) {
        this.skillsLeft--;
      } else {
        this.selectedSkill3 = false;
      }


    }
    console.log(this.skillsLeft)
  }
  selectSkill4() {

    this.selectedSkill4 = !this.selectedSkill4;
    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {
      if (this.selectedSkill4 === true && this.skillsLeft === 0) {
        console.log("No more points availabe!")
      }
      if (this.selectedSkill4 === false && this.skillsLeft < 3) {
        this.skillsLeft++;
      }
      if (this.selectedSkill4 === true && this.skillsLeft > 0) {
        this.skillsLeft--;
      } else {
        this.selectedSkill4 = false;
      }


    }
    console.log(this.skillsLeft)
  }
  selectSkill5() {

    this.selectedSkill5 = !this.selectedSkill5;
    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {
      if (this.selectedSkill5 === true && this.skillsLeft === 0) {
        console.log("No more points availabe!")
      }
      if (this.selectedSkill5 === false && this.skillsLeft < 3) {
        this.skillsLeft++;
      }
      if (this.selectedSkill5 === true && this.skillsLeft > 0) {
        this.skillsLeft--;
      } else {
        this.selectedSkill5 = false;
      }
    }
    console.log(this.skillsLeft)
  }
  selectSkill6() {

    this.selectedSkill6 = !this.selectedSkill6;
    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {
      if (this.selectedSkill6 === true && this.skillsLeft === 0) {
        console.log("No more points availabe!")
      }
      if (this.selectedSkill6 === false && this.skillsLeft < 3) {
        this.skillsLeft++;
      }
      if (this.selectedSkill6 === true && this.skillsLeft > 0) {
        this.skillsLeft--;
      } else {
        this.selectedSkill6 = false;
      }


    }
    console.log(this.skillsLeft)
  }
  selectSkill7() {

    this.selectedSkill7 = !this.selectedSkill7;
    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {
      if (this.selectedSkill7 === true && this.skillsLeft === 0) {
        console.log("No more points availabe!")
      }
      if (this.selectedSkill7 === false && this.skillsLeft < 3) {
        this.skillsLeft++;
      }
      if (this.selectedSkill7 === true && this.skillsLeft > 0) {
        this.skillsLeft--;
      } else {
        this.selectedSkill7 = false;
      }


    }
    console.log(this.skillsLeft)
  }
  selectSkill8() {

    this.selectedSkill8 = !this.selectedSkill8;

    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {
      if (this.selectedSkill8 === true && this.skillsLeft === 0) {
        console.log("No more points availabe!")
      }
      if (this.selectedSkill8 === false && this.skillsLeft < 3) {
        this.skillsLeft++;
      }
      if (this.selectedSkill8 === true && this.skillsLeft > 0) {
        this.skillsLeft--;
      } else {
        this.selectedSkill8 = false;
      }


    }
    console.log(this.skillsLeft)
  }
  selectSkill9() {

    this.selectedSkill9 = !this.selectedSkill9;

    if (this.skillsLeft >= 0 && this.skillsLeft <= 3) {
      if (this.selectedSkill9 === true && this.skillsLeft === 0) {
        console.log("No more points availabe!")
      }

      if (this.selectedSkill9 === false && this.skillsLeft < 3) {
        this.skillsLeft++;
      }
      if (this.selectedSkill9 === true && this.skillsLeft > 0) {
        this.skillsLeft--;
      } else {
        this.selectedSkill9 = false;
      }


    }
    console.log(this.skillsLeft)
  }

}
