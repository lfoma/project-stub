module.exports = {
    block: 'page',
    title: 'Magic Desktop explore page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'md-explore.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'md-explore.min.js' }],
    content: [
        {
            block: 'header'
        },
        {
            block: 'content',
            content: [
                {
                    block: 'exploreLanding',
                    content: {
                        elem: 'section',
                        content: [
                            {
                                block: 'exploreLanding-howItWorks',
                            },
                            {
                                elem: 'section',
                                content: [
                                    {
                                        block: 'exploreLanding-notify',
                                        mix: [{block: 'exploreLanding', elem: 'wave'}]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            block: 'footer'
        }
    ]
};
