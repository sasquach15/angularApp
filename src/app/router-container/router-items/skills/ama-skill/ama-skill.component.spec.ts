import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaSkillComponent } from './ama-skill.component';

describe('AmaSkillComponent', () => {
  let component: AmaSkillComponent;
  let fixture: ComponentFixture<AmaSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmaSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmaSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
