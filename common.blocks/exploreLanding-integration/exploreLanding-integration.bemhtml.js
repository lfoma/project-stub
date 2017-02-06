block('exploreLanding-integration').content()(function() {
    var landing = 'exploreLanding';
    return [
        {
            block: 'grid',
            elem: 'container',
            content: [
                {
                    block: 'grid',
                    elem: 'row',
                    content: [
                        {
                            block: 'grid',
                            elem: 'cell',
                            content: [
                                {
                                    block: landing,
                                    elem: 'title',
                                    content: 'Windows integration '
                                },
                                {
                                    block: landing,
                                    elem: 'title',
                                    elemMods: {level: 4},
                                    content: 'You can easily add to Magic Desktop any Windows applications of your choice!'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: this.block,
                    elem: 'spaceHolder',
                }
            ]
        }
    ]
});
