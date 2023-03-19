import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecroStatisticsComponent } from './necro-statistics.component';

describe('NecroStatisticsComponent', () => {
  let component: NecroStatisticsComponent;
  let fixture: ComponentFixture<NecroStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecroStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NecroStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
