import { TestBed } from '@angular/core/testing';

import { SkillSelectionService } from './skill-selection.service';

describe('SkillSelectionService', () => {
  let service: SkillSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
