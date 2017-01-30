block('watchVideo')(
    js()(true),
    content()(function() {
        var thisBlock = this.block;
        return [
            {
                block: 'button',
                mix: [{block: thisBlock, elem: 'button'}],
                content: [
                    {
                        block: 'image',
                        mix: [{block: thisBlock, elem: 'play'}],
                        url: 'images/watchVideo__play.svg'
                    },
                    {
                        block: thisBlock,
                        elem: 'text',
                        content: this.ctx.text
                    }
                ]
            },
            {
                block: 'modal',
                mods: {autoclosable: true, theme: 'islands'},
                content: [
                    {
                        block: this.block,
                        elem: 'video',
                        url: this.ctx.url
                    },
                ]
            }
        ];
    }),
    elem('video')(
        tag()('iframe'),
        attrs()(function() {
            return {
                'data-src': this.ctx.url,
                allowfullscreen: 'allowfullscreen',
                frameborder: 0,
                width: 853,
                height: 480
            };
        })
    )
);
