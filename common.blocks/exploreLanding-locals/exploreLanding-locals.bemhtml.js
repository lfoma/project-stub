block('exploreLanding-locals').content()(function() {
    var landing = 'exploreLanding',
        thisBlock = this.block;
    return [
        {
            block: 'grid',
            elem: 'container',
            content: [
                {
                    block: 'grid',
                    elem: 'row',
                    elemMods: {justify: 'center'},
                    content: [
                        {
                            block: 'grid',
                            elem: 'content',
                            elemMods: {align: 'center'},
                            mix: [{block: this.block, elem: 'title'}],
                            content: [
                                {
                                    block: landing,
                                    elem: 'title',
                                    content: 'Magic Desktop 9'
                                },
                                {
                                    block: landing,
                                    elem: 'title',
                                    elemMods: {level: 3},
                                    content: 'Give children a valuable head-start!'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'grid',
                    elem: 'row',
                    elemMods: {justify: 'center'},
                    mix: [{block: this.block, elem: 'download'}],
                    content: [
                        {
                            block: 'grid',
                            elem: 'content',
                            elemMods: {align: 'center'},
                            content: [
                                {
                                    block: 'downloadButton',
                                    mods: { notice: true }
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'grid',
                    elem: 'row',
                    elemMods: {justify: 'center'},
                    mix: [{block: this.block, elem: 'description'}],
                    content: [
                        {
                            block: 'grid',
                            elem: 'content',
                            elemMods: {align: 'center', width: '1-2'},
                            content: [
                                {
                                    block: this.block,
                                    elem: 'text',
                                    content: 'Millions of kids in over 230 countries enjoy safety and great educational values of Magic Desktop, which is now available in 24 languages! '
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'grid',
                    elem: 'row',
                    elemMods: {justify: 'between', wrap: 'wrap'},
                    content: [
                        {
                            title: 'Danish',
                            image: 'images/locals/danish.png'
                        },
                        {
                            title: 'English',
                            image: 'images/locals/english.png'
                        },
                        {
                            title: 'French',
                            image: 'images/locals/french.png'
                        },
                        {
                            title: 'Greek',
                            image: 'images/locals/greek.png'
                        },
                        {
                            title: 'Italian',
                            image: 'images/locals/italian.png'
                        },
                        {
                            title: 'Norwegian',
                            image: 'images/locals/norwegian.png'
                        },
                        {
                            title: 'Portuguese',
                            image: 'images/locals/portuguese.png'
                        },
                        {
                            title: 'Russian',
                            image: 'images/locals/russian.png'
                        },
                        {
                            title: 'Swedish',
                            image: 'images/locals/swedish.png'
                        },
                        {
                            title: 'Dutch',
                            image: 'images/locals/dutch.png'
                        },
                        {
                            title: 'Finnish',
                            image: 'images/locals/finnish.png'
                        },
                        {
                            title: 'German',
                            image: 'images/locals/german.png'
                        },
                        {
                            title: 'Hungarian',
                            image: 'images/locals/hungarian.png'
                        },
                        {
                            title: 'Japanese',
                            image: 'images/locals/japanese.png'
                        },
                        {
                            title: 'Polish',
                            image: 'images/locals/polish.png'
                        },
                        {
                            title: 'Romanian',
                            image: 'images/locals/romanian.png'
                        },
                        {
                            title: 'Spanish',
                            image: 'images/locals/spanish.png'
                        },
                        {
                            title: 'Turkish',
                            image: 'images/locals/turkish.png'
                        }
                    ].map(function (item) {
                        return {
                            block: 'grid',
                            elem: 'cell',
                            mix: [{block: thisBlock, elem: 'item'}],
                            content: [
                                {
                                    block: thisBlock,
                                    elem: 'country',
                                    content: [
                                        {
                                            block: 'image',
                                            mix: [{ block: thisBlock, elem: 'flag' }],
                                            url: item.image,
                                            alt: item.title
                                        },
                                        {
                                            block: thisBlock,
                                            elem: 'countryName',
                                            content: item.title
                                        }
                                    ]
                                }
                            ]
                        }
                    })
               }
            ]
        }
    ];
});
