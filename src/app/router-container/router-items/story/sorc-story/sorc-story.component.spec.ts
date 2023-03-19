import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorcStoryComponent } from './sorc-story.component';

describe('SorcStoryComponent', () => {
  let component: SorcStoryComponent;
  let fixture: ComponentFixture<SorcStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorcStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorcStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
