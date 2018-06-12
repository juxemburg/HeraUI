import { RegularLayoutModule } from './regular-layout.module';

describe('RegularLayoutModule', () => {
  let regularLayoutModule: RegularLayoutModule;

  beforeEach(() => {
    regularLayoutModule = new RegularLayoutModule();
  });

  it('should create an instance', () => {
    expect(regularLayoutModule).toBeTruthy();
  });
});
