import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaStatisticsComponent } from './ama-statistics.component';

describe('AmaStatisticsComponent', () => {
  let component: AmaStatisticsComponent;
  let fixture: ComponentFixture<AmaStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmaStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmaStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
