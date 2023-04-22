import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class ServiceService {
    startingValues = {
        chooseChar: false,
        welcomeMessage: true,
        charNumber: "0",
        navActive: "",
        selectedCharacter: "0",
        navOpacity: "0",
        navTouched: "",
        navAnimation: '0',
        name: 'null',


    }

}