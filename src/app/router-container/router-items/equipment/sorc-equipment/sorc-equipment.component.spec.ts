import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorcEquipmentComponent } from './sorc-equipment.component';

describe('SorcEquipmentComponent', () => {
  let component: SorcEquipmentComponent;
  let fixture: ComponentFixture<SorcEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorcEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorcEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
