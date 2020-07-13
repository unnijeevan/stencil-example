import { newSpecPage } from '@stencil/core/testing';
import { KjAccordion } from './kj-accordion';

describe('kj-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KjAccordion],
      html: `<kj-accordion></kj-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <kj-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kj-accordion>
    `);
  });
});
