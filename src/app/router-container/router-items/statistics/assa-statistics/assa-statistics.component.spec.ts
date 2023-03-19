import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssaStatisticsComponent } from './assa-statistics.component';

describe('AssaStatisticsComponent', () => {
  let component: AssaStatisticsComponent;
  let fixture: ComponentFixture<AssaStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssaStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssaStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
