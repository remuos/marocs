import { ListsArticlePage } from './app.po';

describe('lists-article App', () => {
  let page: ListsArticlePage;

  beforeEach(() => {
    page = new ListsArticlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
