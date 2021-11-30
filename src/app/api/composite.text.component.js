const { Component } = require('./component');

class CompositeTextComponent extends Component { 

    constructor() {
        super();
        this.components = [];
    }

    addComponent(component) {
        this.components.push(component);
    }


    text(text) {
        let result = [];
        if (text) {
            result.push(text);
        }
        this.components.forEach(component => {
            result.push(component.text());
        })

        return result.join(' ');

    }
}

module.exports.CompositeTextComponent = CompositeTextComponent;