import { newSpecPage } from '@stencil/core/testing';
import { KjInputbutton } from './kj-inputbutton';

describe('kj-inputbutton', () => {
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
          <button type="button">
            <span aria-hidden="true">
              &amp;#10004
            </span>
          </button>
        </div>
       </div>
      </kj-inputbutton>
    `);
  });
});
