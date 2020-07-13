import { Component, ComponentInterface, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'kj-modal',
  styleUrl:'kj-modal.css',
  scoped: true
})
export class KjModal implements ComponentInterface {
  @Prop() header: string;
  @Prop() show: boolean;

  @Event() onclose: EventEmitter;

  modalContainer: HTMLElement;

  componentDidLoad(){
    if(this.show)
     this.showModal();
  }

  @Watch('show')
  updateShow(show){
    if(show)
     this.showModal();
    else
     this.closeModal();
  }
  
  showModal() {
    if(this.modalContainer)
      this.modalContainer.style.display = "block";
  }
  
  closeModal() {
    this.modalContainer.style.display = "none";
  }

  handleClose() {
    this.closeModal();
    this.onclose.emit();
  }

  render() {
    return (
    <div   ref={c => {
      this.modalContainer = c;
      }} class='modal fade show' tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{this.header}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => this.handleClose()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <slot> </slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => this.handleClose()}>Close</button>
          </div>
        </div>
      </div>
    </div>
    );
  }

}
