import {LitElement, html} from 'lit';
import { ModalStyles } from './modal-character-styles.js';

export class ModalCharacter extends LitElement {
  
  static get properties() {
    return {
    /**
     * Status
     * @type {string}
     */
      Status: {type: String},
    /**
     * Template
     * @type {string}
     */
      Template: {type: String},
    /**
     * Character ID
     * @type {string}
     */
      CharacterID: {type: String},
    };
  }

  static styles = [
    ModalStyles
  ];
  constructor() {
    super();
    this.url = `https://rickandmortyapi.com/api/character/`;
    this.urlEpisode = `https://rickandmortyapi.com/api/episode/`;
    this.method = "GET";
    this.CharacterID = '';
    this.CharacterImage = '';
    this.CharacterLocation = '';
    this.CharacterName = '';
    this.CharacterSpecies = '';
    this.CharacterStatus = '';
    this.CharacterEpisodes = [];
  }
  
  _getDataApi(event) {
    this.CharacterID = event.detail.data[0].id;
    this.CharacterImage = event.detail.data[0].image;
    this.CharacterLocation = event.detail.data[0].location;
    this.CharacterName = event.detail.data[0].name;
    this.CharacterSpecies = event.detail.data[0].species;
    this.CharacterStatus = event.detail.data[0].status;
    this.CharacterEpisodes = event.detail.data[0].episodes;
  }
  _getEpisodesDataApi(event) {
    console.log(event.detail)
  }
  _ChangeModalStatus(){
    this.Status = false;

    //Clean the div
    this.CharacterID = '';
    this.CharacterImage = '';
    this.CharacterLocation = '';
    this.CharacterName = '';
    this.CharacterSpecies = '';
    this.CharacterStatus = '';
    this.CharacterEpisodes = [];

    this.dispatchEvent(new CustomEvent('GetModalStatus', {
        detail: this.Status,
    }))
  }

  render() {
    return html`
    ${this.Status === 'true' ? html`
    <get-api-data @ApiData="${this._getDataApi}" url="${this.url + this.CharacterID}" method="${this.method}"></get-api-data>
    <div class="modal">
      <div class="modal__dialog">
        <div class="modal__header">
          <p class="card__id"> #${this.CharacterID} - </p>
          <span class="card__name">${this.CharacterName}</span>
        </div>
        <div class="modal__content">
          <img class="card__image" src="${this.CharacterImage}"/>
          <div class="card__info">
            <strong>Status:</strong>
            <span data-status="${this.CharacterStatus}">${this.CharacterStatus}</span>
            <strong>Species:</strong>
            <span>${this.CharacterSpecies}</span>
            <strong>Last Location:</strong>
            <span>${this.CharacterLocation}</span>
            <strong>Number of Episodes:</strong>
            <span>${this.CharacterEpisodes.length}</span>
          </div>
        </div>
        <div class="modal__footer">
          <a class="close-btn" @click="${this._ChangeModalStatus}">Close</a>
        </div>
      </div>
    </div>` : ''}`;
  }

}

window.customElements.define('modal-character', ModalCharacter);
