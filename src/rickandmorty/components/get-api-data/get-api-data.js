
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
      page: {type: String},
    };
  }

  constructor() {
    super();
    this.url = '';
    this.method = '';
  }
  updated(){
    this.getData();
  }

  getData(){
    fetch(this.url, {method: this.method})
    .then(response => response.ok ? response.json() : response.error)
    .then((data) => this._sendData(data))
    .catch((error) => console.error('Failed Request :/',error))
  }
  _sendData(data){
    const CustomData = [];
    data?.results.forEach(element => {
      CustomData.push({
        id: element.id,
        image: element.image,
        name: element.name,
        gender: element.gender,
        species: element.species,
        location: element.location.name,
        status: element.status
      })
    });
    this.dispatchEvent(new CustomEvent('ApiData', {
        detail: {pages: data.info.pages, data: CustomData},
    }))
    console.log('Event Request!',data);
  }

}

window.customElements.define('get-api-data', GetApiData);
