import { LdnDfPage } from './app.po';

describe('ldn-df App', () => {
  let page: LdnDfPage;

  beforeEach(() => {
    page = new LdnDfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
