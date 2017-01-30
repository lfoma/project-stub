block('topMenu')(
    elem('item')(
        content()(function() {
            return [
                {
                    block: this.block,
                    elem: 'thumbnail',
                    content: [
                        {
                            block: 'image',
                            mix: [{block: this.block, elem: 'thumbnail-image'}],
                            url: this.ctx.icon
                        }
                    ]
                },
                {
                    block: this.block,
                    elem: 'item-title',
                    content: this.ctx.content
                }
            ];
        }),
        match(function () {
            return this.ctx.url
        }).content()(function () {
            return {
                block: 'link',
                url: this.ctx.url,
                content: applyNext()
            }
        })
    )
);
