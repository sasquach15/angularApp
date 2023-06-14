import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  storyIntro: string = 'AS A YOUNG MAN YOU GROWN UP IN SMALL VILLAGE. YOUR PARENT WERE';
  storyText: string = '';
  options: string[] = ['ROYAL KING GUARDS.', 'PEASANTS WITH SOME GROUNDS.', 'PROFESSIONAL DILDO SELLERS.'];
  selectedOption: string = '';
  showOptions: boolean = true;
  showStory: boolean = false;
  storyCount: number = 0;

  ngOnInit(): void {
    this.startStory();
  }

  startStory(): void {
    this.storyCount = 0;
    this.showOptions = true;
    this.showStory = false;
    this.storyText = '';
    this.selectedOption = '';
  }

  selectOption(index: number): void {
    this.selectedOption = this.options[index];
    this.showOptions = false;
    this.showStory = false;

    setTimeout(() => {
      switch (this.storyCount) {
        case 0:
          this.storyIntro += ' ' + this.selectedOption + 'AND THEY WERE VERY GOOD AT IT.';
          break;
        case 1:
          this.storyIntro += ' ' + this.selectedOption + 'AND THEY WERE VERY GOOD AT IT.';
          break;
        case 2:
          this.storyIntro += ' ' + this.selectedOption + 'AND THEY WERE VERY GOOD AT IT.';
          break;
        // Dodaj więcej przypadków dla kolejnych części historii
        default:
          this.storyText = 'Koniec historii.';
          break;
      }

      this.storyCount++;

      if (this.storyCount > 5) {
        this.startStory(); // Resetowanie historii po 5 częściach
      }
    }, 500);
  }
}



