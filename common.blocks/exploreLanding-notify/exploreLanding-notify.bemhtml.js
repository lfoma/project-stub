block('exploreLanding-notify').content()(function () {
    return [
        {
            block: 'exploreLanding',
            elem: 'content',
            content: [
                {
                    block: 'exploreLanding',
                    elem: 'content',
                    elemMods: {width: '2-3'},
                    content: [
                        {
                            block: 'exploreLanding',
                            elem: 'row',
                            elemMods: {justify: 'center', align: 'center'},
                            content: [
                                {
                                    block: 'image',
                                    url: 'images/icon.png',
                                    alt: 'Pointer on the red circle',
                                    mix: [{'block': 'exploreLanding-notify', elem: 'icon'}]
                                },
                                {
                                    block: 'exploreLanding-notify',
                                    elem: 'text',
                                    content: 'Magic Desktop can be configured to launch on system startup<br> so kids will not have access to Windows at any time. '
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
});
