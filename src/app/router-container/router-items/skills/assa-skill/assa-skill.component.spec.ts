import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssaSkillComponent } from './assa-skill.component';

describe('AssaSkillComponent', () => {
  let component: AssaSkillComponent;
  let fixture: ComponentFixture<AssaSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssaSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssaSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
