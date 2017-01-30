({
    mustDeps: [
        'button',
        {
            block: 'popup',
            mods: {theme: 'islands', target: 'anchor', autoclosable: true},
        }
    ],
    shouldDeps: [
        'image',
        {
            elem: 'item'
        },
        {
            elem: 'link'
        }
    ]
})
