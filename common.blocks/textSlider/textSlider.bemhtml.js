block('textSlider')(
    js()(true),
    content()(function() {
    return [
        {
            elem: 'root',
            content: [
                {
                    elem: 'list',
                    content: this.ctx.slides.map(function (text) {
                        return {
                            elem: 'item',
                            content: text
                        }
                    })
                }
            ]
        },
        {
            elem: 'control',
            elemMods: {direction: 'prev'},
            content: '<'
        },
        {
            elem: 'control',
            elemMods: {direction: 'next'},
            content: '>'
        }
    ];
}));
