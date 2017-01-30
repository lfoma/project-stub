modules.define('textSlider', ['i-bem-dom', 'jquery__jcarousel'], function(provide, bemDom, $) {
    provide(bemDom.declBlock(this.name, {
            _carousel: {},
            onSetMod: {
                js: {
                    inited: function () {
                        this._carousel = $(this.findChildElem('root').domElem)
                            .jcarousel({
                                wrap: 'circular',
                                transitions: {transforms3d: true, easing: 'ease-in-out'}
                            })
                            .data('jcarousel');
                        this._domEvents(this.findChildElems('control')).on('click', this._slide);
                    }
                }
            },
            _slide: function (e) {
                var _self = this,
                    toNextSlide = e.bemTarget.getMod('direction') === 'next';

                _self._carousel.scroll(toNextSlide ? '+=1' : '-=1');
            }
        }
    ));
});
