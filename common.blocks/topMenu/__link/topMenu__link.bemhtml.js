block('topMenu').elem('link').replace()(function() {
    return [
        {
            block: 'link',
            mix: [this.ctx],
            url: this.ctx.url,
            content: [
                this.ctx.content
            ]
        }
    ];
});
