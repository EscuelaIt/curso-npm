import { async, TestBed } from '@angular/core/testing';
import { EitUiModule } from './ui.module';

describe('EitUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EitUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EitUiModule).toBeDefined();
  });
});
