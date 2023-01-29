import {LitElement, html} from 'lit';
import { CharacterStyles } from './card-character-styles.js';
import '../modal-character/modal-character.js'

export class CardCharacter extends LitElement {

  static get properties() {
    return {
      /**
       * The characters list array
       * @type {string}
       */
      characters: {type: Array},
      /**
       * Modal Status
       * @type {string}
       */
      ModalStatus: {type: String},
      /**
       * CharacterID To modal
       * @type {string}
       */
      CharacterID: {type: String},
    };
  }
  static styles = [
    CharacterStyles
  ];
  constructor() {
    super();
    this.characters = [];
  }
  
  _ChangeModalStatusOpen(event){
    //Open Modal
    let character = event.target
    let characterid = character.getAttribute('data-character-id');
    this.CharacterID = characterid;
    this.ModalStatus = true;
  }
  _ChangeModalStatusClose(event){
    this.ModalStatus = event.detail;
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
          <div class="card">
            <div class="card__info">
            <p class="card__id"> #${character.id}</p>
                <span class="card__name">
                  ${character.name} - ${character.gender === 'Female' ? `♀️` : `♂️`}
                </span>
                <span data-status="${character.status}">${character.status}-
                  <strong> ${character.species}</strong>
                </span>
              <span>${character.type}</span>
              <span>🌎 ${character.location}</span>
              <span class="viewmore-btn" @click="${this._ChangeModalStatusOpen}" data-character-id='${character.id}'>More Info</span>
            </div>
            <div class="card-image">
              <img src="${character.image}"/>
            </div>
          </div>`;
        })}
    </div>
    <modal-character @GetModalStatus="${this._ChangeModalStatusClose}" Status='${this.ModalStatus}' CharacterID="${this.CharacterID}"></modal-character>
    `;
  }

}

window.customElements.define('card-character', CardCharacter);
