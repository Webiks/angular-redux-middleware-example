import { AngularReduxMiddlewarePage } from './app.po';

describe('angular-redux-middleware App', () => {
  let page: AngularReduxMiddlewarePage;

  beforeEach(() => {
    page = new AngularReduxMiddlewarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
