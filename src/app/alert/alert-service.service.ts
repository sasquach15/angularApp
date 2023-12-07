import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertServiceService {
  constructor() {}

  isAlertVisible = false;
  creatingCharacterAlert = false;
  statAlert = false;
  skillAlert = false;
  storyAlert = false;
}
