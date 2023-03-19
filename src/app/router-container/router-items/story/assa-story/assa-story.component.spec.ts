import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssaStoryComponent } from './assa-story.component';

describe('AssaStoryComponent', () => {
  let component: AssaStoryComponent;
  let fixture: ComponentFixture<AssaStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssaStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssaStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
