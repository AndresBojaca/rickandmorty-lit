import {LitElement, html} from 'lit';
import { FilterStyles } from './filter-component-styles.js';

export class FilterComponent extends LitElement {
  
  static styles = [
    FilterStyles
  ];

  constructor() {
    super();
  }
  _sendFilter(event) {
    const input = event.target;
    this.dispatchEvent(new CustomEvent('filter', {
        bubbles: true,
        detail: input.value
    }))
  }

  render() {
    return html`
    <div class="filter-container">
      <label>Find a Character</label>
      <input @input=${this._sendFilter} placeholder="E: Alien Morty">
    </div>
    `;
  }

}

window.customElements.define('filter-component', FilterComponent);
