import { Component, OnInit } from "@angular/core";
import { StoryService } from "./story.service";


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  currentStory: string = ''
  initialStory: string = 'YOU WERE BORN IN A SMALL VILLAGE NEAR MOUNTAINS CALLED WYPIZDOW. YOUR PARENTS WERE...'

  options: any = [
    { text: 'KINGS ROYAL GUARDS', value: 'jaja' },
    { text: 'POOR TRADERS WITH FEW COINS', value: 'jokok' },
    { text: 'PROFESSIONAL DILDO SELLERS', value: ' PROFESSIONAL DILDO SELLERS AND THEY WERE VERY GOOD AT IT. AFTER YOU SAW THEM BEING BACKSTABBED BY UNSATISFIED CUSTOMER YOU WERE NEVER THE SAME KID AGAIN. YOU DECIDED TO BECOME...' }
  ];
  showOptions: boolean = false;


  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.storyService.updateCurrentStory(this.initialStory);
    this.typeWriterEffect(this.initialStory);
  }

  typeWriterEffect(text: string) {
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < text.length) {
        this.currentStory += text.charAt(currentIndex);
        currentIndex++;
        setTimeout(type, 15);
      } else {
        this.showOptions = true;
      }
    };

    type();
  }

  selectOption(option: any) {
    this.currentStory = this.currentStory.slice(0, -3);
    this.showOptions = false;

    const optionValue = option.value;
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < optionValue.length) {
        this.currentStory += optionValue.charAt(currentIndex);
        currentIndex++;
        setTimeout(type, 15);
      } else {
        this.options.splice(0, 3);
        this.showOptions = true;
        const newOptions = [
          { text: 'SHADOW ASSASSIN', value: ' SHADOWASSASSIN ELO STORY SHADOWASSASSIN SHADOWASSASSIN SHADOWASSASSIN SHADOWASSASSIN' },
          { text: 'HAND OF JUSTICE', value: ' HANDOFJUSTICE STORY HANDOFJUSTICE ELO STORY HANDOFJUSTICE STORY HANDOFJUSTICE STORY' },
          { text: 'BEGGINER DILDO SELLER...', value: ' DILDOSTORY7 DILDOSTORY7 DILDOSTORY7 ELO DILDOSTORY7 DILDOSTORY7 DILDOSTORY7 DILDOSTORY7 DILDOSTORY7 DILDOSTORY7' }
          // Dodaj więcej opcji, jeśli jest to potrzebne
        ];

        if (this.currentStory.includes('ELO')) {
          newOptions.splice(0, 3)
          newOptions.push(
            { text: 'NEW OPTION 4', value: 'NEW OPTION 4 TEST VALUE' },
            { text: 'NEW OPTION 5', value: 'NEW OPTION 5 TEST VALUE' },
            { text: 'NEW OPTION 6', value: 'NEW OPTION 6 TEST VALUE' }
            // Dodaj więcej opcji, jeśli jest to potrzebne
          );
        }

        if (this.currentStory.includes('TEST')) {
          newOptions.splice(0, 3)
          newOptions.push(
            { text: 'NEW OPTION 7', value: 'NEW OPTION 7 JAJCZ VALUE' },
            { text: 'NEW OPTION 8', value: 'NEW OPTION 8 JAJCZ VALUE' },
            { text: 'NEW OPTION 9', value: 'NEW OPTION 9 JAJCZ VALUE' }
          )
        }
        if (this.currentStory.includes('JAJCZ')) {
          this.showOptions = false
        }

        this.options.push(...newOptions);
      }
    }
    type();
  };

}



