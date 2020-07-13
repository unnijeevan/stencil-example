import { Component, Prop, h, Event, EventEmitter, State, Watch } from '@stencil/core';

@Component({
  tag: 'kj-multiselect',
  styleUrl: 'kj-multiselect.css',
  shadow: true
})
export class KjMultiselect {

  @Prop() options: any[] = [];
  @Prop() selectedOptions: any[] = [];
  @Prop() displayProperty: string;
  @Event() onselect: EventEmitter;

  @State() _selectedOptions: any[] = [];

  componentWillLoad() {
   this._selectedOptions = this.selectedOptions;
  }

  @Watch('selectedOptions')
  watchHandler(options) {
    this._selectedOptions = options;
  }

  handleSelect = (e, option) => {
    if(e.target.checked){
      this._selectedOptions.push(option);
    }
    else {
      this._selectedOptions =  this._selectedOptions.filter(o=> o!= option);
    }
     this.onselect.emit(this._selectedOptions);
  }

  render() {
    return this.options.map(option => {
      let name = option;
      if(this.displayProperty)
        name = option[this.displayProperty];
      return(
       <div class="form-check">
         <label class="form-check-label">
            <input type="form-check-input" checked={this._selectedOptions.indexOf(option) !== -1} 
              onChange={e => {
                this.handleSelect(e, option);
              }}/>
              {name}
         </label>
       </div>
      );      
    });
  }
    
}
