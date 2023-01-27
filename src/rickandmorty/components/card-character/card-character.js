import {LitElement, html} from 'lit';
import { CharacterStyles } from './card-character-styles.js';
import '../modal-component/modal-component.js'

export class CardCharacter extends LitElement {

  static get properties() {
    return {
      /**
       * The characters list array
       * @type {string}
       */
      characters: {type: Array},
    };
  }
  static styles = [
    CharacterStyles
  ];
  constructor() {
    super();
    this.characters = [];
    this.modalStatus = false;
  }

  _changeModalStatus(){
    //Open Modal
    this.modalStatus = true;
  }

  render() {
    return html`
    ${this.characters?.length === 0 ? html `
    <div class="nodata-text">
      Characters not found. :/
    </div>`: ''}
    
    <div class="card__container">
        ${this.characters?.map(character => {
          return html `
          <div class="card" @click="${this._changeModalStatus}">
            <div class="card__info">
                <span class="card__name">
                  <p class="card__id"> #${character.id}</p>
                  ${character.name}
                </span>
                <span>${character.gender === 'Female' ? this.femaleIcon : html ``}</span>
                <span data-status="${character.status}">${character.status} - <strong>${character.species}</strong></span>
              <span>${character.type}</span>
              <span>${character.location}</span>
            </div>
            <div class="card-image">
              <img src="${character.image}"/>
            </div>
          </div>`;
        })}
    </div>
    <modal-component Status="${!this.modalStatus}"></modal-component>
    `;
  }

}

window.customElements.define('card-character', CardCharacter);
