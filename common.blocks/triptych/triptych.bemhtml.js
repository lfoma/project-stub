block('triptych')(
    tag()('ul'),
    content()(function() {
        return this.ctx.items.map(function (item) {
            var elem = item;
            elem.elem = 'item';
            return elem;
        })
    })
);
