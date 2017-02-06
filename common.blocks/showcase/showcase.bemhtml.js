block('showcase')(
    js()(true),
    match(function () { return this.ctx.items; })(
        content()(function () {
            var thisBlock = this.block,
                ctx = this.ctx,
                links = [],
                screens = [];

            ctx.items.forEach(function (item, index) {
                links.push({
                    block: thisBlock,
                    elem: 'title',
                    elemMods: {active: item.active, theme: item.type},
                    js: {id: index },
                    icon: item.icon,
                    content: item.title
                });

                screens.push({
                    block: thisBlock,
                    elem: 'screen',
                    elemMods: {hidden: !item.active},
                    js: { id: index },
                    content: [
                        {
                            block: thisBlock,
                            elem: 'slider',
                            slides: item.slides
                        },
                        {
                            block: thisBlock,
                            elem: 'description',
                            content: item.description
                        }
                    ]
                });
            });

            return [
                {
                    block: 'grid',
                    elem: 'row',
                    elemMods: {justify: 'between'},
                    content: [
                        {
                            block: thisBlock,
                            elem: 'menu',
                            content: links
                        },
                        {
                            block: thisBlock,
                            elem: 'slides',
                            content: screens
                        }
                    ]
                }
            ]
        })
    )
);
