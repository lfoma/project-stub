module.exports = {
    block: 'page',
    title: 'Magic Desktop explore page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'md-explore.min.css'}
    ],
    scripts: [{elem: 'js', url: 'md-explore.browser.js'}],
    content: [
        {
            block: 'header'
        },
        {
            block: 'content',
            content: [
                {
                    block: 'exploreLanding',
                    content: [
                        {
                            block: 'exploreLanding-main',
                            mix: [{block: 'exploreLanding', elem: 'section', elemMods:{srollDownButton: true }}]
                        },
                        {
                            block: 'exploreLanding-howItWorks',
                            mix: [{block: 'exploreLanding', elem: 'section', elemMods:{offset: true }}]
                        },
                        {
                            block: 'exploreLanding-notify',
                            mix: [{block: 'exploreLanding', elem: 'section', elemMods:{wave: true }}]
                        },
                        {
                            block: 'exploreLanding-applications',
                            mix: [{block: 'exploreLanding', elem: 'section', elemMods:{offset: true }}]
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer'
        }
    ]
};
