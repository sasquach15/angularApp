import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StoryService {
    currentStory: string = '';
    showOptions: boolean = false;

    public options: any[] = [
        { text: 'KINGS ROYAL GUARDS', value: 'jaja' },
        { text: 'POOR TRADERS WITH FEW COINS', value: 'jokok' },
        { text: 'PROFESSIONAL DILDO SELLERS', value: ' PROFESSIONAL DILDO SELLERS AND THEY WERE VERY GOOD AT IT. AFTER YOU SAW THEM BEING BACKSTABBED BY UNSATISFIED CUSTOMER YOU WERE NEVER THE SAME KID AGAIN. YOU DECIDED TO BECOME...' }
    ];

    updateCurrentStory(newStory: string) {
        this.currentStory = newStory;
    }

    public updateOptions(newOptions: any[]) {
        this.options = newOptions;
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
}
