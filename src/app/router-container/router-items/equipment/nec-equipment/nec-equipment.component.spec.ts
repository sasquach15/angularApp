import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecEquipmentComponent } from './nec-equipment.component';

describe('NecEquipmentComponent', () => {
  let component: NecEquipmentComponent;
  let fixture: ComponentFixture<NecEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NecEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
