block('topMenu')(
    js()(true),
    content()(function () {
        return [
            {
                block: 'button',
                mods: {view: 'plain'},
                mix: [{block: this.block, elem: 'toggle'}],
                content: [
                    {
                        block: 'image',
                        url: 'images/common/menu.svg'
                    }
                ]
            },
            {
                block: 'popup',
                mods: {theme: 'islands', target: 'anchor', autoclosable : true},
                mix: [{block: this.block, elem: 'popup'}],
                directions : ['left-top'],
                mainOffset: -86, // Ширина иконки меню + ширина внутреннего отступа
                secondaryOffset: -50,
                content: [
                    {
                        block: this.block,
                        elem: 'inner',
                        content: [
                            {
                                block: this.block,
                                elem: 'head',
                                mix: {block: 'grid', elem: 'row', elemMods: {justify: 'end'}},
                                content: [
                                    {
                                        block: this.block,
                                        elem: 'language',
                                        content: [
                                            {
                                                block: 'switchLanguage'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'button',
                                        mods: {view: 'plain'},
                                        mix: [{block: this.block, elem: 'close'}],
                                        content: [
                                            {
                                                block: 'image',
                                                url: 'images/common/close.svg'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block: this.block,
                                elem: 'main',
                                content: [
                                    {
                                        block: this.block,
                                        elem: 'item',
                                        icon: 'images/item_main.svg',
                                        content: [
                                            {
                                                block: this.block,
                                                elem: 'item-text',
                                                tag: 'span',
                                                content: 'Magic Desktop for'
                                            },
                                            {
                                                block: this.block,
                                                elem: 'main-tick',
                                                tag: 'span',
                                                content: [
                                                    {
                                                        block: 'image',
                                                        url: 'images/common/tick.svg'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: this.block,
                                        elem: 'main-links',
                                        mix: [{block: 'grid', elem: 'row'}],
                                        content: [
                                            {
                                                block: this.block,
                                                elem: 'link', url: '/', content: 'Families'
                                            },
                                            {
                                                block: this.block,
                                                elem: 'link', url: '/', content: '(Pre)schools'
                                            },
                                            {
                                                block: this.block,
                                                elem: 'link', url: '/', content: 'Public Libraries'
                                            },
                                            {
                                                block: this.block,
                                                elem: 'link', url: '/', content: 'Touch Tables'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block: this.block,
                                elem: 'additional',
                                content: [
                                    {
                                        block: this.block,
                                        elemMods: {view: 'column'},
                                        elem: 'item', url: '/', icon: 'images/item_info.svg', content: 'Summary'
                                    },
                                    {
                                        block: this.block,
                                        elemMods: {view: 'column'},
                                        elem: 'item', url: '/', icon: 'images/item_download.svg', content: 'Download'
                                    },
                                    {
                                        block: this.block,
                                        elemMods: {view: 'column'},
                                        elem: 'item', url: '/', icon: 'images/item_community.svg', content: 'Community'
                                    },
                                    {
                                        block: this.block,
                                        elemMods: {view: 'column'},
                                        elem: 'item', url: '/', icon: 'images/item_search.svg', content: 'Explore'
                                    },
                                    {
                                        block: this.block,
                                        elemMods: {view: 'column'},
                                        elem: 'item', url: '/', icon: 'images/item_buy.svg', content: 'Buy'
                                    },
                                    {
                                        block: this.block,
                                        elemMods: {view: 'column'},
                                        elem: 'item', url: '/', icon: 'images/item_letter.svg', content: 'Contact Us'
                                    }
                                ]
                            },
                            {
                                block: this.block,
                                elem: 'footer',
                                content: [
                                    {
                                        block: this.block,
                                        elem: 'link', url: '/', content: 'License Agreement'
                                    },
                                    {
                                        block: this.block,
                                        elem: 'link', url: '/', content: 'Privacy Policy'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
}));
