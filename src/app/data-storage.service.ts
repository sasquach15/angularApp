import { Injectable } from '@angular/core';
import { Stat } from './router-container/router-items/statistics/stat-interface';

const DEFAULT_STAT_POINTS = 20;

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

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
    enteredName: '',
    isNameVisible: false,
    chosenSkills: []
  }



  // STATISTICS

  selectedStats: Stat[] = [];
  initialStatPoints: number = DEFAULT_STAT_POINTS;

  private initialStats: Stat[] = [];

  private stats: Stat[] = [
    { name: 'STRENGTH', value: 10, statPoints: DEFAULT_STAT_POINTS },
    { name: 'DEXTERITY', value: 15, statPoints: DEFAULT_STAT_POINTS },
    { name: 'VITALITY', value: 20, statPoints: DEFAULT_STAT_POINTS },
    { name: 'WISDOM', value: 10, statPoints: DEFAULT_STAT_POINTS },
    { name: 'CHARISMA', value: 10, statPoints: DEFAULT_STAT_POINTS }
  ];

  constructor() {
    this.initializeStats();
  }

  getStats(): Stat[] {
    return this.stats;
  }

  getSelectedStats(): Stat[] {
    return this.selectedStats;
  }

  initializeStats(): Stat[] {
    this.selectedStats = [
      { name: 'STRENGTH', value: 10, statPoints: 20 },
      { name: 'DEXTERITY', value: 15, statPoints: 20 },
      { name: 'VITALITY', value: 20, statPoints: 20 },
      { name: 'WISDOM', value: 10, statPoints: 20 },
      { name: 'CHARISMA', value: 10, statPoints: 20 }
    ];

    return this.selectedStats;
  }
  resetSelectedStats(): void {
    this.selectedStats = this.stats.map(stat => ({ ...stat }));
  }

  restoreInitialValues(): void {
    this.selectedStats = this.initialStats.map(stat => ({ ...stat }));
  }

}




