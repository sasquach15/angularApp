import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StoryService {
    currentStory: string = '';

    constructor() { }

    updateCurrentStory(newStory: string) {
        this.currentStory = newStory;
    }
}
