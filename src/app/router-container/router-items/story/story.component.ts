import { Component, OnInit } from "@angular/core";
import { StoryService } from "./story.service";
import { CharacterService } from "src/app/shared/data/character-service.service";
import { DataStorageService } from "src/app/shared/data/data-storage.service";

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.css"]
})
export class StoryComponent implements OnInit {
  initialStory: string = "YOU WERE BORN IN A SMALL VILLAGE NEAR MOUNTAINS CALLED WYPIZDOW. YOUR PARENTS WERE...";

  constructor(
    public storyService: StoryService,
    private characterService: CharacterService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    if (!this.dataStorageService.currentCharacter) {
      this.storyService.currentStory = this.characterService.fetchedCharacterStory;
      this.storyService.showOptions = false;
    }

    if (this.storyService.currentStory.length === 0) {
      this.storyService.typeWriterEffect(this.initialStory);
    }

  }

  selectOption(option: any) {
    this.storyService.currentStory = this.storyService.currentStory.slice(0, -3);
    this.storyService.showOptions = false;

    const optionValue = option.value;
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < optionValue.length) {
        this.storyService.currentStory += optionValue.charAt(currentIndex);
        currentIndex++;
        setTimeout(type, 15);
      } else {
        const newOptions = [
          { text: 'SHADOW ASSASSIN', value: ' SHADOWASSASSIN ELO STORY SHADOWASSASSIN SHADOWASSASSIN SHADOWASSASSIN SHADOWASSASSIN' },
          { text: 'HAND OF JUSTICE', value: ' HANDOFJUSTICE STORY HANDOFJUSTICE ELO STORY HANDOFJUSTICE STORY HANDOFJUSTICE STORY' },
          { text: 'BEGGINER DILDO SELLER...', value: ' DILDOSTORY7 DILDOSTORY7 DILDOSTORY7 ELO DILDOSTORY7 DILDOSTORY7 DILDOSTORY7 DILDOSTORY7 DILDOSTORY7 DILDOSTORY7' }
        ];

        if (this.storyService.currentStory.includes("ELO")) {
          newOptions.splice(0, 3)
          newOptions.push(
            { text: "NEW OPTION 4", value: "NEW OPTION 4 TEST VALUE" },
            { text: "NEW OPTION 5", value: "NEW OPTION 5 TEST VALUE" },
            { text: "NEW OPTION 6", value: "NEW OPTION 6 TEST VALUE" }
          );
        }

        if (this.storyService.currentStory.includes("TEST")) {
          newOptions.splice(0, 3)
          newOptions.push(
            { text: "NEW OPTION 7", value: "NEW OPTION 7 JAJCZ VALUE" },
            { text: "NEW OPTION 8", value: "NEW OPTION 8 JAJCZ VALUE" },
            { text: "NEW OPTION 9", value: "NEW OPTION 9 JAJCZ VALUE" }
          );
        }



        this.storyService.updateOptions(newOptions);
        this.storyService.showOptions = true;
        if (this.storyService.currentStory.includes("JAJCZ")) {
          this.storyService.showOptions = false;
        }
      }
    };

    type();
  }
}


