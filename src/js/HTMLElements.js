export default class HTMLElements {

    addEvent(el, event, fn) {
        document.querySelector(el)[event] = () => {
            fn();
        }
    }

    getValue(el, valueType) {
        return document.querySelector(el)[valueType];
    }

    setValue(el, valueType, value) {
        document.querySelector(el)[valueType] = value;
    }
}