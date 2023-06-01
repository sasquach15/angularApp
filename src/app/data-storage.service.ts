import { Injectable } from '@angular/core';

type Stat = {
  name: string;
  value: number;
  statPoints: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private statPointsKey = 'statPoints';
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

  increase(stat: Stat): void {

    if (stat.statPoints > 0) {
      stat.value++;
      stat.statPoints--;
    }
  }

  saveStatPoints(statPoints: number): void {
    const clampedStatPoints = Math.max(statPoints, 0);
    localStorage.setItem(this.statPointsKey, clampedStatPoints.toString());
  }
}