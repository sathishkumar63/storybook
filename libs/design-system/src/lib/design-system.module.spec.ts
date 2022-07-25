import { async, TestBed } from '@angular/core/testing';
import { DesignSystemModule } from './design-system.module';

describe('DesignSystemModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DesignSystemModule]
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(DesignSystemModule).toBeDefined();
  });
});
