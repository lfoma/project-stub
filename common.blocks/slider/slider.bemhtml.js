block('slider')(
    js()(function () {
        return this.ctx.options || true;
    }),
    content()(function() {
        var thisBlock = this.block;
        return [
            {
                block: this.block,
                elem: 'root',
                content: [
                    {
                        block: this.block,
                        elem: 'list',
                        content: this.ctx.slides.length && this.ctx.slides.map(function (item, index) {
                            return {
                                block: thisBlock,
                                elem: 'slide',
                                content: item
                            }
                        })
                    }
                ]
            }
        ]
    }),
    mod('paginator', true) (
        content()(function () {
            var thisBlock = this.block;
            return [
                applyNext(),
                {
                    block: this.block,
                    elem: 'paginator',
                    content: this.ctx.slides.length && this.ctx.slides.map(function (item, index) {
                        var isActive = index === 0;
                        return {
                            block: 'button',
                            mods: {view: 'plain'},
                            mix: [{
                                block: thisBlock,
                                elem: 'control',
                                elemMods: {active: isActive, target: index, view: 'bullet'}
                            }]
                        }
                    })
                }
            ]
        })
    ),
    mod('navigation', true) (
        content()(function () {
            var thisBlock =  this.block;
            return [
                applyNext(),
                ['prev', 'next'].map(function (item) {
                    return {
                        block: 'button',
                        mods: {view: 'plain'},
                        mix: [
                            {
                                block: thisBlock,
                                elem: 'control',
                                elemMods: {target: item, view: 'arrow'}
                            }
                        ]
                    }
                })
            ]
        })
    )
);
