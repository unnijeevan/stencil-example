import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kj-accordion',
  shadow: true,
})
export class KjAccordion implements ComponentInterface {
  @Prop() title: string;
  @Prop() expanded: boolean;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
