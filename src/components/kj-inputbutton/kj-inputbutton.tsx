import { Component, ComponentInterface, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'kj-inputbutton'
})
export class KjInputbutton implements ComponentInterface {
  @Prop() placeholder: string = '';
  @Prop() value: string;
  
  @Event() onsave: EventEmitter;

  inputElement: HTMLInputElement;

  handleSave() {
    this.onsave.emit(this.inputElement.value)
  }
   
  handleKeyDown = (e:KeyboardEvent) => {
    if(e.key == "Enter")
     this.handleSave();
  }

  render() {
    return (
      <div class="input-group">
      <input type="text" ref={c => {
      this.inputElement = c;
      }} class="form-control" placeholder={this.placeholder} value={this.value ?? ''} onKeyDown={ (e) => this.handleKeyDown(e)} />
      <div class="input-group-append">       
      <button type="button" class="btn btn-outline-secondary" onClick={() => this.handleSave()}>
      <span aria-hidden="true">Save</span></button>
      </div>
     </div>
    );
  }

}
