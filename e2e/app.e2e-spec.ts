import { KalaiPorfolioPage } from './app.po';

describe('kalai-porfolio App', () => {
  let page: KalaiPorfolioPage;

  beforeEach(() => {
    page = new KalaiPorfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
