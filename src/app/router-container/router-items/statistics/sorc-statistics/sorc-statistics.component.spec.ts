import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorcStatisticsComponent } from './sorc-statistics.component';

describe('SorcStatisticsComponent', () => {
  let component: SorcStatisticsComponent;
  let fixture: ComponentFixture<SorcStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorcStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorcStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
