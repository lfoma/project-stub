block('exploreLanding-applications').content()(function() {
    var landing = 'exploreLanding';
    return [
        {
            block: 'grid',
            elem: 'container',
            content: [
                {
                    block: landing,
                    elem: 'title',
                    mix: [{
                        block: 'grid',
                        elem: 'content'
                    }],
                    content: 'Applications'
                },
                {
                    block: this.block,
                    elem: 'showcase',
                    content: {
                        block: 'showcase',
                        content: [
                            {
                                block: this.block,
                                elem: 'menu',
                                items: [
                                    {
                                        type: 'learn',
                                        title: 'Learn',
                                        icon: 'images/menu-section_type_learn.svg',
                                        items: [
                                            {
                                                id: 'geAcademy',
                                                title: 'Ge Academy',
                                                description: 'Ge Academy is an educational suite of Magic Desktop. Children spend hundreds of hours in different exercises learning colors, numbers, shapes, logic, mathematics, geography, languages and much more. A fantastic head-start for young minds!',
                                                slides: [
                                                    'images/slides/geAcademy_1.jpg',
                                                    'images/slides/geAcademy_2.jpg',
                                                    'images/slides/geAcademy_3.jpg'
                                                ]
                                            },
                                            {
                                                id: 'learnOnline',
                                                title: 'Learn Online',
                                                description: 'Learn Online app offers thousands of hand-picked educational materials available from many web publishers. It is constantly updated!',
                                                slides: [
                                                    'images/slides/learnOnline_1.jpg'
                                                ]
                                            },
                                            {
                                                id: 'magicMouse',
                                                title: 'Magic Mouse',
                                                description: 'Kids need to learn how to use a computer mouse. Magic Mouse guides them all the way from moving the cursor to clicks, double clicks and drag-drops.',
                                                slides: [
                                                    'images/slides/magicMouse_1.jpg',
                                                    'images/slides/magicMouse_2.jpg',
                                                    'images/slides/magicMouse_3.jpg'
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        type: 'play',
                                        title: 'Play',
                                        icon: 'images/menu-section_type_play.svg',
                                        items: [
                                            {
                                                id: 'gamepad',
                                                title: 'Gamepad',
                                                description: 'Games in the magic collection were designed to develop a wide set of skills, so kids keep learning even while playing.',
                                                slides: [
                                                    'images/slides/gamepad_1.jpg',
                                                    'images/slides/gamepad_2.jpg',
                                                    'images/slides/gamepad_3.jpg'
                                                ]
                                            },
                                            {
                                                id: 'puzzles',
                                                title: 'Puzzles',
                                                description: 'Puzzle Time – a beautiful puzzle game, featuring classic artworks for education and fun.',
                                                slides: [
                                                    'images/slides/puzzles_1.jpg'
                                                ]
                                            },
                                            {
                                                id: 'magicTunes',
                                                title: 'Magic Tunes',
                                                description: 'Magic Tunes is a simple app, where kids can play a few preloaded well-known melodies by taps, clicks or keystrokes.',
                                                slides: [
                                                    'images/slides/magicTunes_1.jpg'
                                                ]
                                            },
                                            {
                                                id: 'talkingParrot',
                                                title: 'Talking Parrot',
                                                description: 'Talking Parrot is a fun app where kids record and play their voice over and over again. Listening to the parrot repeat what they said can substantially improve the clarity of their speech.',
                                                slides: [
                                                    'images/slides/talkingParrot_1.jpg'
                                                ]
                                            },
                                            {
                                                id: 'playOnline',
                                                title: 'Play Online',
                                                description: 'Kids will find hundreds of games in our online collection! Featuring items from the best publishers with famous characters!',
                                                slides: [
                                                    'images/slides/playOnline_1.jpg',
                                                    'images/slides/playOnline_2.jpg',
                                                    'images/slides/playOnline_3.jpg'
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        type: 'watch',
                                        title: 'Watch',
                                        icon: 'images/menu-section_type_watch.svg',
                                        items: [
                                            {
                                                id: 'magicMovies',
                                                title: 'Magic Movies',
                                                description: 'Popular educational and entertaining videos, cartoons and TV shows available in a safe and simple player.',
                                                slides: [
                                                    'images/slides/magicMovies_1.jpg',
                                                    'images/slides/magicMovies_2.jpg'
                                                ]
                                            },
                                            {
                                                id: 'videoOnline',
                                                title: 'Video Online',
                                                description: 'Popular educational and entertaining videos, cartoons and TV shows available in a safe and simple player.',
                                                slides: [
                                                    'images/slides/magicMovies_1.jpg',
                                                    'images/slides/magicMovies_2.jpg'
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        type: 'create',
                                        title: 'Create',
                                        icon: 'images/menu-section_type_create.svg',
                                        items: [
                                            {
                                                id: 'boArt',
                                                title: 'Bo Art',
                                                description: 'Bo Art is where kids first learn how to draw and paint. The minimal and child-friendly interface makes Bo Art an easy-to-use yet powerful tool.',
                                                slides: [
                                                    'images/slides/boArt_1.jpg',
                                                    'images/slides/boArt_2.jpg',
                                                    'images/slides/boArt_3.jpg'
                                                ]
                                            },
                                            {
                                                id: 'rainbow',
                                                title: 'Rainbow',
                                                description: 'Rainbow is a suite of cool templates that kids can combine to create really astonishing things.',
                                                slides: [
                                                    'images/slides/rainbow_1.jpg',
                                                    'images/slides/rainbow_2.jpg'
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        type: 'internet',
                                        title: 'Safe Internet &&nbsp;Email',
                                        icon: 'images/menu-section_type_internet.svg',
                                        items: [
                                            {
                                                id: 'magicBrowser',
                                                title: 'magicBrowser',
                                                description: 'Magic Browser – the world’s safest browser for kids, where children can visit only pre-approved web sites.',
                                                slides: [
                                                    'images/slides/magicBrowser_1.jpg',
                                                    'images/slides/magicBrowser_2.jpg'
                                                ]
                                            },
                                            {
                                                id: 'magicMail',
                                                title: 'Magic Mail',
                                                description: 'Magic Mail is a super easy and fun communication experience! Kids can easily share everything in Magic Desktop with others! And even send Christmas wishes to Santa Claus!',
                                                slides: [
                                                    'images/slides/magicMail_1.jpg',
                                                    'images/slides/magicMail_2.jpg',
                                                    'images/slides/magicMail_3.jpg'
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ];
});
