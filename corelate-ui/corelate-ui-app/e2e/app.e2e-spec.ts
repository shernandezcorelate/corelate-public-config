import { MyAdfAppPage } from './app.po';

describe('my-adf-app App', () => {
  let page: MyAdfAppPage;

  beforeEach(() => {
    page = new MyAdfAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
