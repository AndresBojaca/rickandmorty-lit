import {LitElement, html, css} from 'lit';
import '../get-api-data/get-api-data.js'
import { GetApiData } from '../get-api-data/get-api-data.js';
import { buttonStyles } from './card-component-styles';

export class CardComponent extends LitElement {

  static get properties() {
    return {
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
    };
  }
  static styles = [
    buttonStyles
  ];

  constructor() {
    super();
    this.characters = [];
  }
  getApiData(){
    const getApiData = new GetApiData;
    getApiData.getData();
  }

  handleEvent(event) {
    this.characters = event.detail;
    console.log(event.detail)
  }
  firstUpdated(){
  }  
  findCharacter(event) {
    const input = event.target;
    console.log(input)
    this.filter = input.value;
    this.characters = this.characters.filter(({name}) => name.toLowerCase().includes(this.filter.toLowerCase()))
  }

  render() {
    return html`
    <get-api-data @ApiData="${this.handleEvent}" url="https://rickandmortyapi.com/api/character" method="GET"></get-api-data>
    <div class="filter-container">
      <label>Find a Character</label>
      <div class="input-btn-container">
        <input @input=${this.findCharacter} placeholder="Find Rick And Morty Character">
        <a class="get-api-btn"href="#" @click="${this.getApiData}">Get API</a>
      </div>
    </div>
    <div class="card__container">
        ${this.characters.map(character => {
          return html `
          <div class="card">
            <div class="card__info">
              <h1>${character.name}</h1>
              <span data-status="${character.status}">${character.status}</span>
              <span>${character.gender}</span>
              <span>${character.species}</span>
              <span>${character.type}</span>
            </div>
            <div class="card-image">
              <img src="${character.image}"/>
            </div>
          </div>`;
        })}
    </div>
    `;
  }

}

window.customElements.define('card-component', CardComponent);
