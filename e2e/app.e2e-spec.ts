import { Xchen203Page } from './app.po';

describe('xchen203 App', function() {
  let page: Xchen203Page;

  beforeEach(() => {
    page = new Xchen203Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
