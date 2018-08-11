import { DemeterModule } from './demeter.module';

describe('DemeterModule', () => {
  let demeterModule: DemeterModule;

  beforeEach(() => {
    demeterModule = new DemeterModule();
  });

  it('should create an instance', () => {
    expect(demeterModule).toBeTruthy();
  });
});
