import { AplicacionTareaPage } from './app.po';

describe('aplicacion-tarea App', function() {
  let page: AplicacionTareaPage;

  beforeEach(() => {
    page = new AplicacionTareaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
