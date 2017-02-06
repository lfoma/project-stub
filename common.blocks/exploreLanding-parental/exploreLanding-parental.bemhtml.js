block('exploreLanding-parental').content()(function () {
    var landing = 'exploreLanding',
        thisBlock = this.block;
    return [
        {
            block: 'grid',
            elem: 'container',
            content: [
                {
                    block: 'grid',
                    elem: 'row',
                    elemMods: {justify: 'between'},
                    mix: [{block: 'grid', elem: 'content'}],
                    content: [
                        {
                            block: 'grid',
                            elem: 'cell',
                            content: [
                                {
                                    block: landing,
                                    elem: 'title',
                                    content: 'Parental features '
                                }
                            ]
                        },
                        {
                            block: 'grid',
                            elem: 'cell',
                            content: [
                                {
                                    block: 'downloadButton'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'showcase',
                    items: [
                        {
                            active: true,
                            title: 'Parental Control',
                            type: 'general',
                            icon: 'images/parentalFeatures/general_icon.svg',
                            description: 'Magic Desktop offers parents and teachers an extensive set of administrative controls and settings.',
                            slides: ['images/parentalFeatures/general.jpg']
                        },
                        {
                            title: 'Set up user profile',
                            type: 'profile',
                            icon: 'images/parentalFeatures/profile_icon.svg',
                            description: 'Customize children’s experiences by selecting user age, gender, languages and knowledge areas.',
                            slides: ['images/parentalFeatures/general.jpg']
                        },
                        {
                            title: 'No Work – No Play',
                            type: 'work',
                            icon: 'images/parentalFeatures/work_icon.svg',
                            description: 'With a "No Work – No Play!" feature, technology becomes your true ally. Encourage kids to learn, set your rules, reward accomplishments!',
                            slides: ['images/parentalFeatures/work.png']
                        },
                        {
                            title: 'Limit screen time',
                            type: 'limit',
                            icon: 'images/parentalFeatures/limit_icon.png',
                            description: 'Most children need to have some limits. In Magic Desktop you may set screen time daily limits as well as allow computer use in certain hours and days of the week. ',
                            slides: ['images/parentalFeatures/limit.png']
                        },
                        {
                            title: 'Easy switch',
                            type: 'switch',
                            icon: 'images/parentalFeatures/switch_icon.svg',
                            description: 'Magic Desktop does not replace Windows in any way, so you may easily switch to Windows at any time you need. And then back to Magic Desktop.',
                            slides: ['images/parentalFeatures/switch.jpg']
                        },
                        {
                            title: 'Remote access ',
                            type: 'remote',
                            icon: 'images/parentalFeatures/remote_icon.svg',
                            description: 'The Active Parents service allows parents/guardians to stay actively involved in what their kids are doing on the computer and to help them remotely.',
                            slides: ['images/parentalFeatures/switch.jpg']
                        }
                    ]
                }
            ]
        }
    ];
});
