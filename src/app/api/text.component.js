const { Component } = require('./component');

class TextComponent extends Component {

    constructor(prefixText) {
        super();
        this.prefixText = prefixText;
    }

    config(value, separator) {
        this.value = value;
        this.separator = separator;
        return this;
    }

    text(text) {
        let result = [];
        if (this.prefixText) {
            result.push(this.prefixText);
        }
        if (text) {
            result.push(text);
        }
        if (this.separator && (text || this.prefixText)) {
            result.push(this.separator);
        }
        result.push(this.value);
        return result.join('');
    }

}

module.exports.TextComponent = TextComponent;