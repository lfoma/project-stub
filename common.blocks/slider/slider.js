modules.define('slider', ['i-bem-dom', 'button', 'jquery__jcarousel'], function(provide, bemDom, Button, $) {

provide(bemDom.declBlock(this.name, {
    _carousel: {},
    TARGET_NEXT: 'next',
    TARGET_PREV: 'prev',
    onSetMod: {
        js: {
            inited: function() {
                var options = {};

                this.params.loop && (options.wrap = 'circular');
                this.params.animate && (options.transitions = {transforms3d: true, easing: 'ease-in-out'});

                this.params.sliderOptions && (Object.assign(options, this.params.sliderOptions));

                this._carousel = $(this.findChildElem('root').domElem).jcarousel(options).data('jcarousel');
                this._domEvents(this.findChildElems('control')).on('click', this._slide, this);
            }
        }
    },
    _slide: function (e) {
        var _self = this,
            target = e.bemTarget.getMod('target'),
            targetSlide;

        if (target === this.TARGET_NEXT) {
            targetSlide = '+=1';
        } else if (target === this.TARGET_PREV) {
            targetSlide = '-=1';
        } else if (isFinite(target)) {
            targetSlide = +target;
        } else {
            return;
        }

        e.bemTarget._block().findChildElems({elem: 'control', elemMods: {view: 'bullet', active: true}}).setMod('active', false);
        e.bemTarget.setMod('active', true);
        _self._carousel.scroll(targetSlide);
    }
}));

});
