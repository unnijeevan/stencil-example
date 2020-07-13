import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { KjMultiselect } from './kj-multiselect';

describe('kj-multiselect', () => {

  let page: SpecPage;
  let element;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [KjMultiselect],
      html: '<kj-multiselect></kj-multiselect>'
    });
    element = page.rootInstance;
  });

  it('renders', async () => {    
    expect(page.body).toEqualHtml(`
      <kj-multiselect>
      <mock:shadow-root></mock:shadow-root> 
      </kj-multiselect>
    `);
  });
  
  it('renders with options', async () => {
       
    element.options = ['one', 'two'];
    
    await page.waitForChanges();

    expect(page.body).toEqualHtml(`
      <kj-multiselect>
      <mock:shadow-root>
      <div class="multi-select-item">
             <label class="check-box-label">
               <input type="checkbox">
             one
             </label>
           </div>
           <div class="multi-select-item">
             <label class="check-box-label">
               <input type="checkbox">
               two
             </label>
           </div> 
      </kj-multiselect>
    `);
  });

  it('renders with complex options', async () => {
       
    element.options = [{ id: 1, name:'one'}, {id: 2, name: 'two'}];
    element.displayProperty = 'name';

    await page.waitForChanges();

    expect(page.body).toEqualHtml(`
      <kj-multiselect>
      <mock:shadow-root>
      <div class="multi-select-item">
             <label class="check-box-label">
               <input type="checkbox">
             one
             </label>
           </div>
           <div class="multi-select-item">
             <label class="check-box-label">
               <input type="checkbox">
               two
             </label>
           </div> 
      </kj-multiselect>
    `);
  });

  it('renders with selected options', async () => {
       
    element.options = ['one', 'two'];
    element.selectedOptions = ['one'];

    await page.waitForChanges();

    expect(page.body).toEqualHtml(`
      <kj-multiselect>
      <mock:shadow-root>
      <div class="multi-select-item">
             <label class="check-box-label">
               <input type="checkbox" checked>
             one
             </label>
           </div>
           <div class="multi-select-item">
             <label class="check-box-label">
               <input type="checkbox">
               two
             </label>
           </div> 
      </kj-multiselect>
    `);
  });
  
  it('emits event on select', async() => {    
    element.options = ['one', 'two'];
    await page.waitForChanges();
    let checkbox = page.root.shadowRoot.querySelector('input');
    let checkboxSpy = jest.fn();
    page.win.addEventListener('onselect', checkboxSpy);

    await checkbox.dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(checkboxSpy).toHaveBeenCalled();
  });

});
