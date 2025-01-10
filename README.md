# Website for PyCon Israel 2024

Website built with Pelican, using a PyCon-Israel-Flex theme based on
Flex. This is a static website (this is what Pelican does), but it
relies on a Pretalx system that manages and presents the schedule,
talks and speakers.

## Tools and building

The Python side is managed by [Poetry](https://python-poetry.org/).
Use `poetry install` to get the dependencies.

The theme styling is built with gulp and other npm tools.
If you want to change anything in the CSS, 
- Preparation: Go to the folder `website_2024/themes/PyCon-Israel-Flex`,
  and there run the command `npm install`
- "Compilation" (mostly of the Less sources): Run the command
  `npm run build`

When you want to build the site itself, there's two things you need to do:

First, to create the speakers page, you need to run the 
`speakers.py` script (found in the repo's root folder) from
inside the virtualenv like this (assuming the site is generated from
website_2024 folder):

    python ./speakers.py <event-slug> -t <api-token> -o ./website_2024/content/pages/speakers.md

In this command, `<event-slug>` is the slug for the event in Pretalx,
and `<api-token>` is an authentication token you can get from your 
Pretalx profile page. For PyCon Israel 2024, `event-slug` is `pycon-2024`,
and your profile page is https://cfp.pycon.org.il/pycon-2024/me/ .

Then, use `make html` from the
`website_2024` folder. It puts the built site in `output`. You
can use `make clean` to remove everything if you want to rebuild
from scratch; but it doesn't clean the theme files.

You can also use `make devserver` for the HTML, and `npm run watch`
for the styling -- these create watchers which update the output as
you change the source files.

### Deployment

This repo is set up to deploy by Github Actions, to a GitHub Pages
page. On the main repo, this gets deployed to
https://hamakor.github.io/pycon-il-2024/ which is proxied from
https://pycon.org.il/2024 . For this proxy to work well, the `SITEURL`
setting points to that latter URL, rather than directly to the GitHub
Pages (as usual with Pelican, in publishing we set the URLs to
absolute and not relative).

The deploy operation is defined to trigger only on pushes to `main`.

The configuration settings are defined in
`website_2024/pelicanconf.py` (for development) and `publishconf.py`
(for "production").

Note that all explanations about Github here are valid at the time
written, but Github may change their UI, or the way Pages and Actions
work.

#### Alternate Deployment

The trivial case where you'd want an alternate deployment is when
preparing changes in the website contents. Then, the only thing
you really need to change is the `SITEURL`. The Github Action is
set to read this from a Github Environment Variable `PLCN_SITEURL`,
so you can just set that to your Github Pages site URL.

To set environment variables in Github, go to your repository
settings, select "Secrets and variables" (under "Security"),
and in the submenu choose "Actions".

In case you want your deployment to include the Speakers page, you
also need to set two further variables: `PRETALX_API_TOKEN` and
`PRETALX_EVENT_NAME`. They will fill the roles of `<api-token>` and
`<event-slug>`, as described above.

Note that these are all defined as variables, not secrets. This is
generally OK -- variables are only visible to people who have access
to your repo settings, and the log of actions (where the token is
printed) is also not publicly accessible.

In case you want your deployment to include other configuration
changes which should not be part of the main deployment, you can put
them in a file `alternateconf.py` next to `pelicanconf.py` and
`publishconf.py`; definitions from `alternateconf.py` will override
those from `publishconf.py` (which, in turn, inherit and override
those in `pelicanconf.py`).  The `alternateconf.py` file does not
exist in the main branch, in order to make it easy to keep a separate
branch in which it is added (and which you can then push to `main` on
your own repo).

## Content

Pages are in `website_2024/content/pages`, and are written in
Markdown. At the top of each page there is a block of metadata. Of
these, the `Title` field is very visible, but also critical are the
`Slug` and `Lang` fields which define the page identity (the Hebrew
and English versions of a page should have the same Slug; otherwise,
different pages should have different Slugs). The `page_number` field
determines the order of the page in the list of pages in the sidebar.

The home page content is defined like other pages, using files
`homepage.md` and `homepage-he.md` in `content/pages`; these contain
mostly HTML, since the homepage is not an "article" like other
pages. The metadata in these files has some unique fields, to choose
the different templates and to save the page as `index.html`.

The home page buttons and top is defined in the templates
`website_2024/themes/PyCon-Israel-Flex/templates/homepage.html` and
`.../homepage-he.html`. In the original template that came with the
Flex theme, this page lists articles (blog posts), but we don't want
that. The original template was kept for reference as
`index.html.orig`. 

Other interesting files to look at:
- The sidebar is defined in
  `website_2024/themes/PyCon-Israel-Flex/templates/partial/sidebar.html`
- The footer is in 
  `website_2024/themes/PyCon-Israel-Flex/templates/partial/footer.html`
- All (non-partial) templates extend
  `website_2024/themes/PyCon-Israel-Flex/templates/base.html` -- that
  means that template defines structure for everything.

## References of software used

- Pelican: You can start at
  https://docs.getpelican.com/en/latest/content.html
- Flex, the base for the theme here:
  https://github.com/alexandrevicenzi/Flex
  + The intention is to have our theme serve many years, so we're
    keeping on the side a repo of the theme alone. You can mostly
    ignore it for now -- work inside the website repo; but that's why
    we try to keep things like the year in settings rather than the
    template source. The theme-only repo is
    https://github.com/Hamakor/PyCon-Israel-Flex
  + Also for future reference: https://github.com/AmirMahmood/Flex-RTL
    (it is based on an old version of Flex, though)
- The Pelican plugin for image processing (not yet in use):
  https://github.com/pelican-plugins/image-process
- The separate Pretalx system we're relying on is
  https://github.com/Hamakor/pycon-il-dockerized-pretalx; of course,
  it is based on https://pretalx.com/p/about/
  (and our intention is to get rid of it -- add all our modifications
  upstream, and have our system hosted)
