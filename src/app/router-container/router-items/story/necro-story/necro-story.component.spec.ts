import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecroStoryComponent } from './necro-story.component';

describe('NecroStoryComponent', () => {
  let component: NecroStoryComponent;
  let fixture: ComponentFixture<NecroStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecroStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NecroStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
