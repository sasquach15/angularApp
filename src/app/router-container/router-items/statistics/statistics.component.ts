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
  statPoints: number = this.statService.getStatPoints();

  constructor(public serviceService: ServiceService, private statService: DataStorageService) { }

  ngOnInit(): void {
    this.stats = this.statService.getStats();
  }

  increase(stat: Stat): void {
    if (this.statPoints >= 0)
      this.statService.increase(stat);
  }

  getTotalStatPoints(): number {
    return this.stats.reduce((total, stat) => total + stat.statPoints - 15, 0);
  }
}