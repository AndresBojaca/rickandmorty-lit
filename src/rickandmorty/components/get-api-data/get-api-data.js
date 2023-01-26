
import {LitElement} from 'lit';

export class GetApiData extends LitElement {

  static get properties() {
    return {
      /**
       * The URL From Api.
       * @type {string}
       */
      url: {type: String},

      /**
       * The method type of the request.
       * @type {String}
       */
      method: {type: String},
    };
  }

  constructor() {
    super();
    this.url = '';
    this.method = '';
    console.log(this.url, this.method)
  }

  getData(){
    fetch(this.url, {method: this.method})
    .then(response => response.ok ? response.json() : response.error)
    .then((data) => this._sendData(data))
    .catch((error) => console.error('Failed Request :/',error))
  }

  _sendData(data){
    this.dispatchEvent(new CustomEvent('ApiData', {
        bubbles: true,
        detail: data.results
    }))
    console.log('Event Request!',data.results);
  }

}

window.customElements.define('get-api-data', GetApiData);
