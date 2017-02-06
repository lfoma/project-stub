block('exploreLanding-magicPick').content()(function () {
    var landing = 'exploreLanding';

    return [
        {
            block: 'grid',
            elem: 'container',
            content: [
                {
                    block: 'grid',
                    elem: 'row',
                    elemMods: {justify: 'between'},
                    content: [
                        {
                            block: 'grid',
                            elem: 'cell',
                            content: [
                                {
                                    block: landing,
                                    elem: 'title',
                                    content: 'Magic Pick'
                                },
                                {
                                    block: landing,
                                    elem: 'title',
                                    elemMods: {level: 4},
                                    content: 'One stop for all edutainment!'
                                }
                            ]
                        },
                        {
                            block: 'grid',
                            elem: 'cell',
                            content: [
                                {
                                    block: 'downloadButton',
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'grid',
                    elem: 'row',
                    mix: [{block: 'grid', elem: 'content', elemMods: {offset: 'base'}}],
                    content: [
                        {
                            block: 'triptych',
                            items: [
                                {
                                    image: {
                                        url: 'images/magicPick/girl.png'
                                    },
                                    content: "Magic Pick is an adaptive technology aiming steady child development across different knowledge areas."
                                },
                                {
                                    image: {
                                        url: 'images/magicPick/toys-logo.png'
                                    },
                                    content: "Our editorial team is constantly reviewing and adding educational and entertaining content available from the best publishers. "
                                },
                                {
                                    image: {
                                        url: 'images/magicPick/robot.png'
                                    },
                                    content: "Magic Pick uses advanced algorithms to suggest content that your child most likely will enjoy and have the best learn-through-play experience."
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'grid',
                    elem: 'row',
                    mix: [{block: 'grid', elem: 'content', elemMods: {offset: 'base'}}],
                    content: [
                        {
                            block: 'image',
                            mix: [{block: this.block, elem: 'screen'}],
                            url: 'images/magicPick/screen.jpg'
                        }
                    ]
                }
            ]
        }
    ];
});
