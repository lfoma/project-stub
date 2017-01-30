block('exploreLanding-main').content()(function () {
    var landing = 'exploreLanding',
        thisBlock = this.block;
    return [
        {
            block: landing,
            elem: 'content',
            elemMods: {width: '2-3', align: 'center'},
            content: [
                {
                    block: landing,
                    elem: 'title',
                    elemMods: {level: '1'},
                    mix: [{block: thisBlock, elem: 'title'}],
                    content: 'What is Magic Desktop?'
                }
            ]
        },
        {
            block: landing,
            elem: 'content',
            elemMods: {width: '2-3', align: 'center'},
            content: [
                {
                    block: 'slider',
                    mods: {navigation: true},
                    mix: [{block: this.block, elem: 'slider'}],
                    options: {
                        loop: true,
                        animation: true
                    },
                    slides: [
                        '“A program that delivers an exciting computer experience to children ages 2 to 12”',
                        '“A program that delivers an exciting computer experience to children ages 12 to 3”',
                        '“A program that delivers an exciting computer experience to children ages 3 to 8”'
                    ].map(function (item) {
                        return {
                            block: thisBlock,
                            elem: 'slide',
                            content: item
                        }
                    })
                }
            ]
        },
        {
            block: landing,
            elem: 'content',
            elemMods: {width: '2-3', align: 'center'},
            content: [
                {
                    block: 'watchVideo',
                    mix: {block: thisBlock, elem: 'button'},
                    text: 'Watch video',
                    url: 'https://www.youtube.com/embed/7pmPO95Y068?rel=0&amp;showinfo=0&amp;autoplay=1'
                }
            ]
        },
        {
            block: landing,
            elem: 'content',
            elemMods: {width: '2-3', align: 'center'},
            content: [
                {
                    block: 'downloadButton',
                    mix: {block: thisBlock, elem: 'button'},
                    mods: {notice: true}
                }
            ]
        }
    ];
});
