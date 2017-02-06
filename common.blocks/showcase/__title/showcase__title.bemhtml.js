block('showcase').elem('title').match(function () { return this.ctx.icon; })
    .content()(function() {
        return [
            {
                block: this.block,
                elem: 'menu-icon',
                content: [
                    {
                        block: 'image',
                        mix: [{ block: this.block, elem: 'menu-image' }],
                        url: this.ctx.icon
                    }
                ]
            },
            {
                block: this.block,
                elem: 'menu-text',
                content: this.ctx.content
            }
        ]
});
