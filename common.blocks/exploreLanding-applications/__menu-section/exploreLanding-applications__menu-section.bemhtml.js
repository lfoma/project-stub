block('exploreLanding-applications').elem('menu-section').content()(function() {
    var thisBlock = this.block,
        isFirst = this.isFirst();
    return [
        {
            block: thisBlock,
            elem: 'menu-header',
            content: [
                {
                    block: thisBlock,
                    elem: 'menu-icon',
                    content: [
                        {
                            block: 'image',
                            mix: [{
                                block: thisBlock,
                                elem: 'menu-image'
                            }],
                            url: this.ctx.icon
                        }
                    ]
                },
                {
                    block: thisBlock,
                    elem: 'menu-header-title',
                    content: this.ctx.title
                }
            ]
        },
        {
            block: thisBlock,
            elem: 'menu-list',
            content: this.ctx.items && this.ctx.items.map(function (item, index) {
                return Object.assign({
                    block: thisBlock,
                    elem: 'menu-item',
                    active: isFirst && index === 0
                }, item)
            })
        }
    ];
});
