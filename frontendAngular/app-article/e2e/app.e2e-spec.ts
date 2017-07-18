import { AppArticlePage } from './app.po';

describe('app-article App', () => {
  let page: AppArticlePage;

  beforeEach(() => {
    page = new AppArticlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
