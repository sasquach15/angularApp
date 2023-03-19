import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssaEquipmentComponent } from './assa-equipment.component';

describe('AssaEquipmentComponent', () => {
  let component: AssaEquipmentComponent;
  let fixture: ComponentFixture<AssaEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssaEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssaEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
