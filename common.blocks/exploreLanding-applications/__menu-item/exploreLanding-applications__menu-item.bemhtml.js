block('exploreLanding-applications').elem('menu-item').content()(function() {
    return [
        {
            block: 'showcase',
            elem: 'item',
            elemMods: {hidden: !this.ctx.active },
            content: [
                {
                    block: 'showcase',
                    elem: 'link',
                    mix: [{block: this.block, elem: 'menu-title'}],
                    content: this.ctx.title
                },
                {
                    block: 'showcase',
                    elem: 'slide',
                    mix: [{block: this.block, elem: 'showcase-slide'}],
                    content: [
                        {
                            block: this.block,
                            elem: 'screen',
                            content: [
                                (function (ctx) {
                                    if (ctx.slides.length > 1) {
                                        return {
                                            block: 'slider',
                                            mix: [{block: ctx.block, elem: 'slider'}],
                                            mods: { paginator: true },
                                            options: {
                                                loop: true,
                                                animate: true
                                            },
                                            slides: ctx.slides.map(function (item) {
                                                return {
                                                    block: 'image',
                                                    mix: [{block: ctx.block, elem: 'screen-image', elemMods: {slider: true}}],
                                                    url: item
                                                }
                                            })
                                        }
                                    } else if (ctx.slides.length === 1) {
                                        return {
                                            block: 'image',
                                            mix: [{block: ctx.block, elem: 'screen-image'}],
                                            url: ctx.slides[0]
                                        }
                                    }
                                })(this.ctx),
                                {
                                    block: this.block,
                                    elem: 'screen-description',
                                    content: this.ctx.description
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
});
