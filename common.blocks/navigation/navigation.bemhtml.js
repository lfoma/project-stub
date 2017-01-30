block('navigation')(
    tag()('nav'),
    content()(function() {
        return [
            {
                elem: 'item',
                content: 'Home',
                url: '/'
            },
            {
                elem: 'item',
                elemMods: {active: true},
                content: 'Explore',
                url: '/'
            },{
                elem: 'item',
                content: 'Buy',
                url: '/'
            },{
                elem: 'item',
                content: 'Download',
                url: '/'
            },{
                elem: 'item',
                content: 'Contact',
                url: '/'
            },{
                elem: 'item',
                content: [
                    {
                        block: 'topMenu'
                    }
                ]
            }
        ];
    }),
    elem('item').match(function () {
        return this.ctx.url;
    }).content()(function () {
        return [
            {
                block: 'link',
                mix: [{ block: this.block, elem: 'link', elemMods: this.elemMods }],
                url: this.ctx.url,
                content: this.ctx.content
            }
        ]
    })
);
