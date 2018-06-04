import { ApplicationContextModule } from './application-context.module';

describe('ApplicationContextModule', () => {
  let applicationContextModule: ApplicationContextModule;

  beforeEach(() => {
    applicationContextModule = new ApplicationContextModule();
  });

  it('should create an instance', () => {
    expect(applicationContextModule).toBeTruthy();
  });
});
