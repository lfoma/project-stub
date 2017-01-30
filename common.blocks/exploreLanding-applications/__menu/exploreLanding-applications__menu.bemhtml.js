block('exploreLanding-applications').elem('menu').content()(function() {
    var thisBlock = this.block;
    return this.ctx.items && this.ctx.items.map(function (item, index) {
        return Object.assign({
            block: thisBlock,
            elem: 'menu-section',
            elemMods: {type: item.type}
        }, item)
    });
});
