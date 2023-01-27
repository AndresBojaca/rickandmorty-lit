import {LitElement, html} from 'lit';
import '../get-api-data/get-api-data.js'
import '../card-character/card-character.js'
import '../filter-component/filter-component.js'
import '../pagination-component/pagination-component.js'
import { CardComponentStyles } from './card-component-styles';

export class CardComponent extends LitElement {

  static get properties() {
    return {
      /**
       * The characters list array
       * @type {string}
       */
      filteredCharacters: {type: Array},
      /**
       * The characters list array
       * @type {string}
       */
      characters: {type: Array},
      /**
       * Filter in input characters list
       * @type {string}
       */
      filter: {type: String},
      /**
       * Current Page
       * @type {string}
       */
      CurrentPage: {type: String},
    };
  }
  static styles = [
    CardComponentStyles
  ];

  constructor() {
    super();
    this.characters = [];
    this.url = `https://rickandmortyapi.com/api/character?page=`;
    this.CurrentPage = 1;
    this.method = "GET";
    //Change
    this.AllPages = 40;
  }

  _getDataApi(event) {
    this.AllPages = event.detail.pages;
    this.characters = event.detail.data;
    //On Get Api Filtered equals to data characters
    this.filteredCharacters = this.characters;
  }
  _getFilter(event){
    this.filter = event.detail;
    this._findCharacter();
  }
  _getPagination(event){
    this.CurrentPage = event.detail
  }
  _findCharacter() {
    this.filteredCharacters = this.characters.filter(({name}) => name.toLowerCase().includes(this.filter.toLowerCase()))
  }

  render() {
    return html`
    <div>
      <get-api-data @ApiData="${this._getDataApi}" url="${this.url + this.CurrentPage }" method="${this.method}"></get-api-data>
      <filter-component @filter="${this._getFilter}"></filter-component>
      <card-character .characters="${this.filteredCharacters}"></card-character>
      <pagination-component @Pagination="${this._getPagination}" AllPages="${this.AllPages}"></pagination-component>
    </div>
    `;
  }

}

window.customElements.define('card-component', CardComponent);
