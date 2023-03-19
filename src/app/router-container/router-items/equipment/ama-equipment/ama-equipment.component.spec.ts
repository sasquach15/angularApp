import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaEquipmentComponent } from './ama-equipment.component';

describe('AmaEquipmentComponent', () => {
  let component: AmaEquipmentComponent;
  let fixture: ComponentFixture<AmaEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmaEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmaEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
