import calcDistance from './calcDistance.js'
import HTMLElements from './HTMLElements.js'

export default class DataReceived {

    constructor() {
        this.htmlElements = new HTMLElements();
        this.calcDistance = calcDistance;
    }

    showData(data) {
        this.data = data;

        // separate call!!! TODO...
        const lat1 = 42.700514;
        const lon1 = 23.306042;

        this.htmlElements.setValue("#ip-address", "value", this.data.ip);
        this.htmlElements.setValue("#country", "innerHTML", this.data.country_name);
        this.htmlElements.setValue("#timezone", "innerHTML", this.data.time_zone);

        const lat2 = this.data.latitude;
        const lon2 = this.data.longitude;

        const distanceInKm = this.calcDistance(lat1, lon1, lat2, lon2);
       
        this.htmlElements.setValue("#distance", "innerHTML", `${distanceInKm.toFixed(2)} km`);
    }
}
