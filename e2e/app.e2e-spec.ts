import { AngularCancerSocietyPage } from './app.po';

describe('angular-cancer-society App', () => {
  let page: AngularCancerSocietyPage;

  beforeEach(() => {
    page = new AngularCancerSocietyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
