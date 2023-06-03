import { Injectable } from '@angular/core';

type Stat = {
  name: string;
  value: number;
  statPoints: number;
}

const DEFAULT_STAT_VALUE = 0;
const DEFAULT_STAT_POINTS = 0;

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() {
    this.initializeStats(); // Dodaj to wywołanie w konstruktorze
  }

  private statPointsKey = 'statPoints';

  selectedStats: Stat[] = []

  private stats: Stat[] = [
    { name: 'STRENGTH', value: 10, statPoints: 20 },
    { name: 'DEXTERITY', value: 15, statPoints: 20 },
    { name: 'VITALITY', value: 20, statPoints: 20 },
    { name: 'WISDOM', value: 10, statPoints: 20 },
    { name: 'CHARISMA', value: 10, statPoints: 20 }
  ];

  getStats(): Stat[] {
    return this.stats;
  }

  getStatPoints(): number {
    const storedStatPoints = localStorage.getItem(this.statPointsKey);

    if (storedStatPoints) {
      return parseInt(storedStatPoints, 10);
    } else {
      return 20;
    }
  }



  saveStatPoints(statPoints: number): void {
    const clampedStatPoints = Math.max(statPoints, 0);
    localStorage.setItem(this.statPointsKey, clampedStatPoints.toString());
  }


  getSelectedStats(): Stat[] {
    return this.selectedStats;
  }
  initializeStats() {
    this.selectedStats = [
      { name: 'Strength', value: DEFAULT_STAT_VALUE, statPoints: DEFAULT_STAT_POINTS },
      { name: 'Agility', value: DEFAULT_STAT_VALUE, statPoints: DEFAULT_STAT_POINTS },
      { name: 'Intelligence', value: DEFAULT_STAT_VALUE, statPoints: DEFAULT_STAT_POINTS },
      { name: 'Stamina', value: DEFAULT_STAT_VALUE, statPoints: DEFAULT_STAT_POINTS },
      { name: 'Luck', value: DEFAULT_STAT_VALUE, statPoints: DEFAULT_STAT_POINTS },
    ];
  }
}