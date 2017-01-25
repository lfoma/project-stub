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
                                content: [
                                    {
                                        block: 'exploreLanding',
                                        elem: 'content',
                                        content: [
                                            {
                                                block: 'exploreLanding',
                                                elem: 'title',
                                                content: 'How it works?'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'exploreLanding',
                                        elem: 'content',
                                        elemMods: { offset: 'base' },
                                        content: [
                                            {
                                                block: 'triptych',
                                                items: [
                                                    {
                                                        image: {
                                                            url: 'images/kid.png',
                                                            alt: 'Redhair girl'
                                                        },
                                                        content: "Magic Desktop runs as an alternative Windows shell or a \"kid's desktop\", creating a safe and child-friendly playground."
                                                    },
                                                    {
                                                        image: {
                                                            url: 'images/school.png',
                                                            alt: 'Globe with square academic cap'
                                                        },
                                                        content: "It's an educational environment where kids are learning all the time without even noticing that!"
                                                    },
                                                    {
                                                        image: {
                                                            url: 'images/shield.png',
                                                            alt: 'Orange-green shield'
                                                        },
                                                        content: "The Security Shield prevents a child from accessing system settings and parental files. "
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'exploreLanding',
                                        elem: 'content',
                                        elemMods: {offset: 'base'},
                                        content: [
                                            {
                                                block: 'exploreLanding',
                                                elem: 'row',
                                                elemMods: {'justify':'between'},
                                                content: [
                                                    {
                                                        block: 'exploreLanding',
                                                        elem: 'cell',
                                                        content: [
                                                            {
                                                                block: 'exploreLanding',
                                                                elem: 'title',
                                                                elemMods: {level: '3'},
                                                                content: 'Here is how it looks like:'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'exploreLanding',
                                                        elem: 'cell',
                                                        content: [
                                                            {
                                                                block: 'downloadButton'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'exploreLanding',
                                        elem: 'content',
                                        elemMods: {offset: 'base'},
                                        content: [
                                            {
                                                block: 'image',
                                                mix: [{block: 'exploreLanding', elem: 'screenshot'}],
                                                url: 'images/screen.jpg',
                                                alt: 'Windows desktop with magic display app'
                                            }
                                        ]
                                    }
                                ]
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
