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



  constructor(public dataStorageService: DataStorageService, private characterService: CharacterService) { }

  get initialStatPoints() {
    return this.dataStorageService.initialStatPoints;
  }

  ngOnInit(): void {
    if (this.dataStorageService.startingValues.selectedCharacter) {
      this.stats = this.dataStorageService.selectedStats;
    } else {
      this.stats = this.characterService.fetchedCharStatList;
      this.dataStorageService.initialStatPoints = 0;
    }
  }

  resetStats() {
    this.dataStorageService.initialStatPoints = 20;
    this.stats = this.dataStorageService.initializeStats()

    console.log(this.dataStorageService.selectedStats)
  }

  increase(stat: Stat): void {
    if (this.dataStorageService.initialStatPoints > 0) {
      stat.value++;
      this.dataStorageService.initialStatPoints--;
      console.log(this.dataStorageService.selectedStats);
    }
  }
}





