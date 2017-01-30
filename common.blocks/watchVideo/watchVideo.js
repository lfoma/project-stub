modules.define('watchVideo', ['i-bem-dom', 'modal', 'button'], function(provide, bemDom, Modal, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var player = this.findChildElem('video'),
                    modal = this.findChildBlock(Modal),
                    playButton = this.findChildElem('button').findMixedBlock(Button);

                this._events(playButton).on('click', function () {
                    modal.setMod('visible', true);
                    player.domElem.attr('src', player.domElem.attr('data-src'));
                });
                this._events(modal).on({ modName : 'visible', modVal : '' }, function () {
                    player.domElem.attr('src', '');
                });

            }
        }
    }
}));

});
