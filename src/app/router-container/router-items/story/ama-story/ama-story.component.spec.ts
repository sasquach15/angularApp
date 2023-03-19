import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaStoryComponent } from './ama-story.component';

describe('AmaStoryComponent', () => {
  let component: AmaStoryComponent;
  let fixture: ComponentFixture<AmaStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmaStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmaStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
