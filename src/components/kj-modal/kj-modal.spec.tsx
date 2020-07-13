import { KjModal } from './kj-modal';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

describe('kj-modal', () => {
  let page: SpecPage;
  let element;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [KjModal],
      html: '<kj-modal></kj-modal>'
    });
    element = page.rootInstance;
  });
  
  it('builds', async () => {
    expect(new KjModal()).toBeTruthy();
  });

  it('should show modal when property is set', async () => {
    element.show = true;
    await page.waitForChanges();

    let modal = page.root.querySelector('.modal') as HTMLElement    
    expect(modal.style.display).toBe('block');
  });

  it('should hide modal when property is set to false', async () => {
    element.show = false;
    await page.waitForChanges();

    let modal = page.root.querySelector('.modal') as HTMLElement;    
    expect(modal.style.display).toBe('none');
  });
  
  it('should close modal close is clicked', async () => {
    element.show = true;
    await page.waitForChanges();

    let closeButton = page.root.querySelector('.close') as HTMLElement;
    let closeButtonSpy = jest.fn();
    page.win.addEventListener('onclose', closeButtonSpy);
    closeButton.click();
    await page.waitForChanges();
   
    let modal = page.root.querySelector('.modal') as HTMLElement;    
    expect(modal.style.display).toBe('none');    
    expect(closeButtonSpy).toHaveBeenCalled();
  });

  it('should set title', async () => {
    let expected =  "Test title";
    element.header = expected;
    await page.waitForChanges();

    let modal = page.root.querySelector('.modal-title') as HTMLElement;    
    expect(modal.textContent).toBe(expected);
  });
});
