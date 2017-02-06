block('showcase').elem('slider').match(function () { return this.ctx.slides })
    .content()(function() {
    if (this.ctx.slides.length > 1) {
        return {
            block: 'slider',
            mods: {paginator: true},
            options: {
                loop: true,
                animate: true
            },
            slides: this.ctx.slides.map(function (slide) {
                return {
                    block: 'image',
                    url: slide
                }
            })
        }
    } else {
        return {
            block: 'image',
            mix: this.ctx.imageMix,
            url: this.ctx.slides[0]
        }
    }
});
