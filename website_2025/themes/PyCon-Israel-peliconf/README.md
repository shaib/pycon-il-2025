# PyCon Israel version of Peliconf

We took the old Peliconf, and we're adapting it for PyCon Israel.
Peliconf was built with Compass, may its soul rest in peace; we are in
the process of porting to more modern Sass.

If you make any styling changes, see the Customization notes below.

# Material changes from original theme

PyCon is a little different... so we made some changes. In particular,
we need better bilingual support (for an Italian conf, where the site
is all in latin script anyway, it's not too bad that the blog shows
up under "news"; with Hebrew, it needs to be translated).

Importantly: We don't have "Social events" as such, but we do have
"related events", and that's what we call it on the site and in the
configuration.

## Attribution

Peliconf was taken from https://github.com/wikey/peliconf

In order to make it compile, we needed to make some modifications in
the package.json and gulpfile.js files, and to vendor (again, with
minor modifications) the Compass stylesheets library.

Compass stylesheet library (the file `_compass.scss` and the folder
`compass` in the folder `sass` here) were taken from
https://github.com/Compass/compass/tree/stable/core/stylesheets with
modification made to the file `compass/_support.scss`.

## Original Peliconf README below

----

# Peliconf


Peliconf is a theme for [Pelican](http://getpelican.com/) designed for
conference sites. [Theme Demo](http://peliconf.carlorat.me/).


![Peliconf preview](scrot.png "Peliconf theme preview")


This theme supports a lot of configuration parameters.

You can find an example configuration file in the root directory of the project:
``pelican-examplei-conf.py``.


## Customization

If you want to customize this theme, first install all dependencies:

```
$ npm install
```

Then, edit the files as you prefer. These are the important directories:

* ``templates/`` Here are the theme templates
* ``sass/`` Here are the scss files, to customize the CSS
* ``js/`` Here is the javscript code

To compile and minify the assets, run:

```
$ gulp
```

## Hints

* If you want to change colors and fonts, edit the file: ``sass/00_settings/_global.scss``


## Configuration

    # The conference name
    SITENAME = 'PeliConf 2016'

    # The header background image, rtelative to static/images
    HEADER_BACKGROUND = 'header.jpg'

    # The conference claim, it will show in a box on the homepage
    EVENT_CLAIM = '''You should not miss our awesome conference.<br>
    You will find a lot of great speakers and interesting talks, from novice level to
    super guru. <b>Save the date!</b>
    '''

    # The event date, it will show above the main title
    EVENT_DATE = '14th March 2016'

    # The event location, it will show above the main title
    EVENT_LOCATION = 'The Great Place, Florence'

    # This is the link on the left in the main navigation. Tuple description:
    # 1. the link URL
    # 2. the link title
    # 3. an optional link image (if None, the title will be shown)
    BRANDING_LINK = ('/', 'carlorat.me', 'branding-logo.png',)

    # These are the buttons below the main title, use them for tickets! Tuple description:
    # 1. The button label
    # 2. The button link
    # 3. If the button is primary or not
    EVENT_CTA_BUTTONS = (
        ('Conference Tickets', 'https://www.eventbrite.com/', True),
        ('Dinner Tickets', 'https://www.eventbrite.com/', False),
    )

    # A string in the footer, use this for Copyright information
    COPYRIGHT = '''© Copyright 2016 carloratm &lt;carlo.ratm@gmail.com&gt;<br>
    <a href="http://www.carlorat.me">carlorat.me</a>
    '''

    # The option social events
    SOCIAL_EVENTS = [
        {
            'title': 'The Social Beer',
            'when': '13th March 2016 18:00',
            'where': 'The awesome Pub',
            'map': 'https://www.google.it/maps',
            'description': 'A short description of the event',
        }, {
            'title': 'The Social Dinner',
            'when': '14th March 2016 20:00',
            'where': 'The Awesome Restaurant',
            'map': 'https://www.google.it/maps',
            'description': 'This event needs reservation. It costs 30 euro per person.',
        }
    ]

    # The Conference sponsors, grouped by sponsorship level. Tuple description:
    # 1. Sponsor Name
    # 2. Sponsor url
    # 3. Sponsor Logo
    EVENT_PARTNERS = {
        'diamond': [
            ('Sponsor', 'http://www.carlorat.me/', 'logo-sponsor.png'),
            ('Sponsor', 'http://www.carlorat.me/', 'logo-sponsor.png'),
        ],
        'platinum': [
            ('Sponsor', 'http://www.carlorat.me/', 'logo-sponsor.png'),
        ],
        'gold': [
            ('Sponsor', 'http://www.carlorat.me/', 'logo-sponsor.png'),
            ('Sponsor', 'http://www.carlorat.me/', 'logo-sponsor.png'),
        ],
        'silver': [],
        'media': [
            ('Sponsor', 'http://www.carlorat.me/', 'logo-sponsor.png'),
            ('Sponsor', 'http://www.carlorat.me/', 'logo-sponsor.png'),
        ],
    }

    # These are social links related to conference, they will appear both on the header in
    # the homepage and in the footer in all pages. Tuple description:
    # 1. The social name
    # 2. The social link
    # 3. The icon (get the name from materialdesignicons.com)
    # 4. A boolean, True if you want to hide the social name (and show only the icon)
    SOCIAL_LINKS = [
        ('facebook', 'https://www.facebook.com/', 'facebook', True),
        ('twitter', 'https://www.twitter.com/', 'twitter', True),
        ('google plus', 'https://www.google.com/', 'google-plus', True),
    ]

    # Additional links that will be placed in the footer navigation
    # Remember that you can put pages in the footer navigation using the :nav: footer meta
    FOOTER_LINKS = (
        ('cheatsheet', '/pages/cheatsheet.html' ),
    )

    # The conference main speakers. Tuple description:
    # 1. Speaker Name
    # 2. Speaker picture, if None a placeholder will be shown
    SPEAKERS = (
        ('Carlo Ascani', 'speaker-male.png'),
        ('Mario Rossi', None),
        ('Carla Bianchi', 'speaker-female.png'),
        ('Chiara Rossi', 'speaker-female.png'),
    )

    # The conference schedule
    SCHEDULE = (
        ('09:00', [
            {
                'title': 'Registration'
            },
        ]),
        ('09:45', [
            {
                'track': 'auditorium',
                'title': 'Keynote',
                'slug': 'keynote',
                'speakers': [
                    'Carlo Ascani',
                ]
            },
        ]),
        ('10:30', [
            {
                'title': 'Coffee Break',
                'extra_class': 'schedule-item--coffe',
            },
        ]),
        ('10:45', [
            {
                'track': 'room A',
                'title': 'The Awesome Talk',
                # The talk slug is used to get the detail page
                'slug': 'the-awesome-talk',
                'level': 'hard',
                'language': 'english',
                'duration': '45 min',
                'speakers': [
                    'Carlo Ascani',
                ]
            },
            {
                'track': 'room B',
                'title': 'The Big Talk',
                'slug': 'the-big-talk',
                'level': 'novice',
                'language': 'italian',
                'duration': '45 min',
                'speakers': [
                    'Franco Rossi',
                    'Maria Rossi'
                ]
            },
        ]),
        ('13:00', [
            {
                'title': 'Pranzo',
                'extra_class': 'schedule-item--lunch',
            },
        ]),
        ('13:45', [
            {
                'track': 'room A',
                'title': 'The Incredible Talk',
                'slug': 'the-incredible-talk',
                'level': 'hard',
                'language': 'english',
                'duration': '45 min',
                'speakers': [
                    'Carlo Ascani',
                ]
            },
            {
                'track': 'room B',
                'title': 'The Nice Talk',
                'slug': 'the-nice-talk',
                'level': 'novice',
                'language': 'italian',
                'duration': '45 min',
                'speakers': [
                    'Franco Rossi',
                    'Maria Rossi'
                ]
            },
        ]),
        ('15:30', [
            {
                'title': 'Coffee Break',
                'extra_class': 'schedule-item--coffe',
            },
        ]),
        ('16:30', [
            {
                'track': 'auditorium',
                'title': 'Lightning Talks',
            },
        ]),
        ('18:00', [
            {
                'title': 'The Beer at the Awesome Pub',
                'extra_class': 'schedule-item--beer',
            },
        ]),
    )

