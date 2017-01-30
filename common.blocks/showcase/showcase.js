modules.define('showcase', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var items = this.findChildElems('item');
                this._domEvents(this.findChildElems('link')).on('click', function (e) {
                    items.setMod('hidden', true);
                    e.bemTarget.findParentElem('item').setMod('hidden', false);
                })
            }
        }
    }
}));

});
