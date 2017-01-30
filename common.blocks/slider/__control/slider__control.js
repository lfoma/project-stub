modules.define('slider__control', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {
    provide(bemDom.declElem('my-form', 'submit-control', {
    beforeSetMod: {
        'active': {
            'true': function () {
                this._block().findChildElem({elem: 'control', view: 'bullet', active: true}).setMod('active', false);
            }
        }
    },
    onSetMod: {
        active: {
            '*': function(modName, modVal) {
                this.findMixedBlock(Button).setMod('active', modVal);
            }
        }
    }
}));

});
