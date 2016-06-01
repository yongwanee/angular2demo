import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DemoAppAppComponent } from '../app/demo-app.component';

beforeEachProviders(() => [DemoAppAppComponent]);

describe('App: DemoApp', () => {
  it('should create the app',
      inject([DemoAppAppComponent], (app: DemoAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'demo-app works!\'',
      inject([DemoAppAppComponent], (app: DemoAppAppComponent) => {
    expect(app.title).toEqual('demo-app works!');
  }));
});
