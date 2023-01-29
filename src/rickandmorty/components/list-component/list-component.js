import {LitElement, html} from 'lit';
import '../get-api-data/get-api-data.js'
import '../card-character/card-character.js'
import '../filter-component/filter-component.js'
import '../pagination-component/pagination-component.js'
import { ListComponentStyles } from './list-component-styles';

export class ListComponent extends LitElement {

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
      CurrentPage: {type: Number},
      /**
       * Api Status TRUE to start
       * @type {string}
       */
      ApiStatus: {type: Boolean},
    };
  }
  static styles = [
    ListComponentStyles
  ];

  constructor() {
    //FirstUpdate
    super();
    this.characters = [];
    this.url = `https://rickandmortyapi.com/api/character?page=`;
    this.method = "GET";
    this.CurrentPage = 1;
    this.ApiStatus = false;
    this.imgStart = 'https://occ-0-3361-3933.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWT5HIl9YXE1ZG5Khq2rGPAsxwcnKPhqJMO3E2WiZBVNemNHAlH148400SKvcFoxJFZsxLBpOCb31CliGnE3RYbxVAyHf10wyEfqZHliqF0z.png?r=a6e'
    this.AllPages = 0;
  }

  _ChangeApiStatus(){
    setTimeout(() => {
      //API Status
      this.ApiStatus = true;
    }, 2000);
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
      <div class="start" style="${this.ApiStatus !== false ? 'height: 0;' :''}">
          <div>
            <img src="${this.imgStart}"/>
            <h1>Wellcome to Rick and Morty API</h1>
            <p>Developed By Andres Bojacá</p>  
            <br>  
            <a class="get-api-btn" @click='${this._ChangeApiStatus}'>Start | Call API</a>
          </div>
      </div>
      <get-api-data @ApiData="${this._getDataApi}" url="${this.url + this.CurrentPage}" ApiStatus="${this.ApiStatus}" method="${this.method}"></get-api-data>
      <filter-component @filter="${this._getFilter}"></filter-component>
      <card-character .characters="${this.filteredCharacters}"></card-character>
      <pagination-component @Pagination="${this._getPagination}" AllPages="${this.AllPages}"></pagination-component>
    </div>
    `;
  }
}

window.customElements.define('list-component', ListComponent);
