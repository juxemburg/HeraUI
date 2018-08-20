import { HeraModule } from './hera.module';

describe('HeraModule', () => {
  let heraModule: HeraModule;

  beforeEach(() => {
    heraModule = new HeraModule();
  });

  it('should create an instance', () => {
    expect(heraModule).toBeTruthy();
  });
});
