import { newSpecPage } from '@stencil/core/testing';
import { KjButton } from './kj-button';

describe('kj-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KjButton],
      html: `<kj-button header="header"></kj-button>`,
    });
    expect(page.root).toEqualHtml(`
      <kj-button header="header">
      <button class="btn btn-primary" type="button">
        header
      </button>
      </kj-button>
    `);
  });
});
