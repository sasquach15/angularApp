import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data/data-storage.service';
import { Stat } from './stat-interface';
import { CharacterService } from 'src/app/shared/data/character-service.service';

/* interface Stat {
  name: string;
  value: number;
  statPoints: number;
} */

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  stats: Stat[] = [];



  constructor(public dataStorageService: DataStorageService, private statService: DataStorageService, private characterService: CharacterService) { }

  get initialStatPoints() {
    return this.statService.initialStatPoints;
  }

  ngOnInit(): void {
    if (this.dataStorageService.startingValues.selectedCharacter) {
      this.stats = this.statService.selectedStats;
    } else {
      this.stats = this.characterService.statList;
    }
  }

  resetStats() {
    this.statService.initialStatPoints = 20;
    this.stats = this.statService.initializeStats()

    console.log(this.statService.selectedStats)
  }

  increase(stat: Stat): void {
    if (this.statService.initialStatPoints > 0) {
      stat.value++;
      this.statService.initialStatPoints--;
      console.log(this.statService.selectedStats);
    }
  }
}





