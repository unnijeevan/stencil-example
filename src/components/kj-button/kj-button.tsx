import { Component, ComponentInterface, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'kj-button'
})
export class KjButton implements ComponentInterface {
  @Prop() header: string;
  
  @Event() onclick: EventEmitter;
  
  handleClick() {
    this.onclick.emit();
  }

  render() {
    return (
      <button type="button" class="btn btn-secondary btn-block" onClick= {()=> { this.handleClick();}}>
        {this.header}
      </button>
    );
  }

}
