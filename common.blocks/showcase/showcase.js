modules.define('showcase', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var items = this.findChildElems('item');
                this._domEvents(this.findChildElems('link')).on('click', function (e) {
                    items.setMod('hidden', true);
                    e.bemTarget.findParentElem('item').setMod('hidden', false);
                });

                var screens = this.findChildElems('screen'),
                    titles = this.findChildElems('title');
                this._domEvents(this.findChildElems('title')).on('click', function (e) {
                    var linkedId = e.bemTarget.params.id;

                    titles.setMod('active', false);
                    e.bemTarget.setMod('active', true);

                    screens.setMod('hidden', true);
                    screens.filter(function (item) {
                        return item.params.id === linkedId;
                    }).setMod('hidden', false);
                })
            }
        }
    }
}));

});
