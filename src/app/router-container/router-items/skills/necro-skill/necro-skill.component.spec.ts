import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecroSkillComponent } from './necro-skill.component';

describe('NecroSkillComponent', () => {
  let component: NecroSkillComponent;
  let fixture: ComponentFixture<NecroSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecroSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NecroSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
