modules.define('topMenu', ['i-bem-dom', 'popup', 'button'], function(provide, bemDom, Popup, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var popup = this.findChildBlock(Popup),
                    toggleElem = this.findChildElem('toggle'),
                    closeElem = this.findChildElem('close');

                popup.setAnchor(toggleElem.domElem);

                this._events(toggleElem.findMixedBlock(Button)).on('click', function () {
                    popup.setMod('visible', true);
                });

                this._events(closeElem.findMixedBlock(Button)).on('click', function () {
                    popup.setMod('visible', false);
                });
            }
        }
    }
}));

});
