import Request from './Request.js'
import DataReceived from './DataReceived.js'
import HTMLElements from './HTMLElements.js'

export default class App {

    constructor() {
        this.request = new Request();
        this.dataReceived = new DataReceived();
        this.htmlElements = new HTMLElements();

        this.onReceived = (data) => {
            this.dataReceived.showData(data);
        }

        this.update();
        this.htmlElements.addEvent("#calculate", "onclick", () => { this.update() })
    }

    update() {
        this.request.getData(this.params, this.onReceived);
    }

    get params() {
        return {
            name: 'geoData',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ip: this.htmlElements.getValue("#ip-address", "value").trim()
            })
        }
    }
}

new App;
