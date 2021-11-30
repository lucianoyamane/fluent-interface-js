const { CompositeTextComponent } = require('./api/composite.text.component');
const { TextComponent } = require('./api/text.component');

class BuildTextComponent extends CompositeTextComponent {

    get lorem() {
        this.addComponent(new LoremTextComponent());
        return this;
    }

    get ipsum() {
        this.addComponent(new IpsumTextComponent());
        return this;
    }

    get dolor() {
        this.addComponent(new DolorTextComponent());
        return this;
    }

    get sit() {
        this.addComponent(new SitTextComponent());
        return this;
    }

    get amet() {
        this.addComponent(new AmetTextComponent());
        return this;
    }

}

class LoremTextComponent extends TextComponent {

    onInit() {
        this.config('lorem', ' ');
    }

}

class IpsumTextComponent extends TextComponent {

    onInit() {
        this.config('ipsum', ' ');
    }

}

class DolorTextComponent extends TextComponent {

    onInit() {
        this.config('dolor', ' ');
    }

}

class SitTextComponent extends TextComponent {

    onInit() {
        this.config('sit', ' ');
    }

}

class AmetTextComponent extends TextComponent {

    onInit() {
        this.config('amet', ' ');
    }

}

module.exports.build = () => new BuildTextComponent();