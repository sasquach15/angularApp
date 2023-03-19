import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorcSkillComponent } from './sorc-skill.component';

describe('SorcSkillComponent', () => {
  let component: SorcSkillComponent;
  let fixture: ComponentFixture<SorcSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorcSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorcSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
