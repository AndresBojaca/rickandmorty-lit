import {LitElement, html} from 'lit';
import { PaginationStyles } from './pagination-component-styles.js';

export class PaginationComponent extends LitElement {
  
  static get properties() {
    return {
        /**
       * Current Page
       * @type {string}
       */
      CurrentPage: {type: Number},
      /**
       * All Pages Number
       * @type {string}
       */
      AllPages: {type: Number},
      /**
     * Array Of Pages
     * @type {string}
     */
      ArrayOfPages: {type: Array},
    };
  }

  static styles = [
    PaginationStyles
  ];

  constructor() {
    super();
    this.CurrentPage = 1;
    this.ArrayOfPages = [];
    this.AllPages = 0;
  }

  willUpdate(){
    this._makePages()
  }
  // attributeChangedCallback(name, oldValue, newValue){
  //   console.log(oldValue, newValue)
  //   if(newValue === oldValue){
  //     console.log('no se puede hacer el for');
  //   }
  // }
  // firstUpdated(){
  //   this._makePages(42)
  // }

  _makePages(){
    for(let index = 1; index <= this.AllPages; index++) {
        this.ArrayOfPages.push(index)
    }
    //Delete the Duplicates 
    const dataArr = new Set(this.ArrayOfPages);
    this.ArrayOfPages = [...dataArr];
  }

  _SetPage(event){
    const btn = event.target;
    const shadowChild = this.shadowRoot.querySelector('.pagination a.active');
    let attrNumber = btn.getAttribute('data-action-type');
    this.CurrentPage = attrNumber;
    
    //Remove Class from all a elements
    shadowChild.classList.remove('active')
    //Add Class active to target element
    btn.classList.add('active')

    this.dispatchEvent(new CustomEvent('Pagination', {
      bubbles: true,
      detail: this.CurrentPage
    }))
  }

  _ChangePage(event){
    const btn = event.target;
    const shadowChild = this.shadowRoot.querySelector('.pagination a.active');
    let attrAction = btn.getAttribute('data-action-type');

    //Remove Class from all a elements
    shadowChild?.classList.remove('active')

    //Pagination Logic
    if(attrAction === 'next'){
      this.CurrentPage != this.AllPages && this.CurrentPage++ 
    }else{
      this.CurrentPage != 1 && this.CurrentPage--;
    }
    this.dispatchEvent(new CustomEvent('Pagination', {
        bubbles: true,
        detail: this.CurrentPage
    }))
  }
  
  render() {
    return html`
    <nav class="pagination">
        <a @click='${this._ChangePage}' data-action-type="prev">➜</a>
        <div class="pagination__pages">
          <div class="pagination__pages--container">
          ${this.ArrayOfPages.map((element) => html `<a class="${this.CurrentPage === element ? 'active' : ''}" @click='${this._SetPage}' data-action-type='${element}'>${element}</a>`)}
          </div>
        </div>
        <a @click='${this._ChangePage}' data-action-type="next">➜</a>
    </nav>
    `;
  }

}

window.customElements.define('pagination-component', PaginationComponent);
