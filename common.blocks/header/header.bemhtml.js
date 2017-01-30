block('header').content()(function () {
    return {
        block: 'grid',
        elem: 'container',
        content: [
            {
                block: 'grid',
                elem: 'row',
                elemMods: {justify: 'between'},
                content: [
                    {
                        elem: 'cell',
                        content: [
                            {
                                block: 'link',
                                url: '/',
                                content: [
                                    {
                                        block: 'magicLogo'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'cell',
                        content: [
                            {
                                block: 'navigation'
                            }
                        ]
                    }
                ]
            }
        ]
    };
});
