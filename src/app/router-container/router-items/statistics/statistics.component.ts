import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/data-storage.service';
import { ServiceService } from 'src/app/service-service';

interface Stat {
  name: string;
  value: number;
  statPoints: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  stats: Stat[] = [];



  constructor(public serviceService: ServiceService, private statService: DataStorageService) { }

  get initialStatPoints() {
    return this.statService.initialStatPoints;
  }

  ngOnInit(): void {
    /* this.stats = this.statService.getStats(); */
    /* this.statService.restoreInitialValues(); */
    this.stats = this.statService.selectedStats;
  }



  resetStats() {
    this.statService.initialStatPoints = 20;
    this.stats = this.statService.initializeStats()

    console.log(this.statService.selectedStats)

  }



  /*   increase(stat: Stat): void {
      if (this.statService.initialStatPoints > 0) {
        stat.value++;
        this.statService.initialStatPoints--;
        this.statService.selectedStats.push(stat);
        console.log(this.statService.selectedStats)
      }
    }
   */

  increase(stat: Stat): void {
    if (this.statService.initialStatPoints > 0) {
      stat.value++;
      this.statService.initialStatPoints--;
      console.log(this.statService.selectedStats);

      // Dodawanie tylko wartości `value` do tablicy `selectedStats`
      /* const selectedStat: Stat = {
        name: stat.name,
        value: stat.value,
        statPoints: 0
      };
      this.statService.selectedStats.push(selectedStat);

      console.log(selectedStat); */
    }
  }
}





