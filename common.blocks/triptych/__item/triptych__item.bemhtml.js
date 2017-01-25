block('triptych').elem('item')(
    tag()('li'),
    content()(function() {
        var image = this.ctx.image;
        image.block = 'image';
        image.mix = [{block: 'triptych', elem: 'image'}];
        return [
            {
                block: 'triptych',
                elem: 'picture',
                content: [
                    image
                ]
            },
            {
                block: 'triptych',
                elem: 'text',
                content: this.ctx.content
            }
        ]
    })
);
