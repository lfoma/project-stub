block('magicLogo').content()(function() {
    var thisBlock = this.block;
    return [
        {
            elem: 'icon',
            content: [
                {
                    block: 'image',
                    mix: [{block: thisBlock, elem: 'image'}],
                    url: 'images/magicLogo__icon.svg'
                }
            ]
        },
        {
            elem: 'text',
            content: [
                {
                    elem: 'title',
                    content: 'Magic Desktop 9'
                },
                {
                    elem: 'subtitle',
                    content: 'it’s like windows for kids!'
                }
            ]
        }
    ];
});
