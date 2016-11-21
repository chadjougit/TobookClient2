import { TobookClient2Page } from './app.po';

describe('tobook-client2 App', function() {
  let page: TobookClient2Page;

  beforeEach(() => {
    page = new TobookClient2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
