import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { KjInputbutton } from './kj-inputbutton';

describe('kj-inputbutton', () => {
  let page: SpecPage;
  let element;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [KjInputbutton],
      html: '<kj-inputbutton></kj-inputbutton>'
    });
    element = page.rootInstance;
  });
  
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KjInputbutton],
      html: `<kj-inputbutton></kj-inputbutton>`,
    });
    expect(page.root).toEqualHtml(`
      <kj-inputbutton>
        <div class="input-group">
        <input class="form-control" placeholder="" type="text" value="">
        <div class="input-group-append">
          <button type="button" class="btn btn-outline-secondary">
            <span aria-hidden="true">
              Save
            </span>
          </button>
        </div>
       </div>
      </kj-inputbutton>
    `);
  });

  it('should emit current value on button click', async () => {
    let expectedValue = 'expectedValue';
    element.value = expectedValue;
    await page.waitForChanges();

    let buttonElement = page.root.querySelector('button');
    let buttonElementSpy = jest.fn();
    page.win.addEventListener('onsave', buttonElementSpy);    
    buttonElement.click();
    await page.waitForChanges();
     
    expect(buttonElementSpy).toHaveBeenCalled();
    expect(buttonElementSpy.mock.calls[0][0].detail).toEqual(expectedValue);

  });
});
