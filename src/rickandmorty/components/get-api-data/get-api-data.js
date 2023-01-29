
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
      /**
     * The method type of the request.
     * @type {String}
     */
      ApiStatus: {type: String}
    };
  }

  constructor() {
    super();
    this.url = '';
    this.method = '';
    this.ApiStatus = 'false';
  }
  updated(){
    this.ApiStatus !== 'false' && this.getData()
  }

  getData(){
    fetch(this.url, {method: this.method})
    .then(response => response.ok ? response.json() : response.error)
    .then((data) => this._sendData(data))
    .catch((error) => console.error('Failed Request :/',error))
  }
  _sendData(data){

    let makeData = [];
    const CustomData = [];

    //If data contains results index
    data.results ? makeData = [...data.results] : makeData = [data]
    
    makeData.forEach(element => {
      CustomData.push({
        id: element.id,
        image: element.image,
        name: element.name,
        gender: element.gender,
        species: element.species,
        location: element.location.name,
        status: element.status,
        episodes: element.episode,
      })
    });
    this.dispatchEvent(new CustomEvent('ApiData', {
        detail: {
          pages: data.info?.pages,
          data: CustomData
        },
    }))
}

}

window.customElements.define('get-api-data', GetApiData);
