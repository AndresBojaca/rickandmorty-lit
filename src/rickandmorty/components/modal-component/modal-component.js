import {LitElement, html} from 'lit';
import { ModalStyles } from './modal-component-styles.js';

export class ModalComponent extends LitElement {
  
  static get properties() {
    return {
    /**
     * Status
     * @type {string}
     */
      Status: {type: String},
    };
  }

  static styles = [
    ModalStyles
  ];
  
  constructor() {
    super();
  }

  render() {
    this.Status === 'true' && 
    html`
    <div class="modal">
      <h1>hola</h1>
    </div>
    `;
  }

}

window.customElements.define('modal-component', ModalComponent);
