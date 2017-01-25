block('downloadButton').content()(function() {
    return {
        block: 'link',
        mix: [{block: 'downloadButton', elem: 'link'}],
        url: '/',
        content: [
            {
                block: 'downloadButton',
                elem: 'text',
                content: 'Download'
            }
        ]
    };
});
