Website for PyCon Israel 2024
=============================

Website built with Pelican, using a PyCon-Israel-Flex theme
based on Flex.

Technicalities:
---------------

The Python side is managed by [Poetry](https://python-poetry.org/).
Use `poetry install` to get the dependencies.

The theme styling is built with gulp and other npm tools.
If you want to change anything in the CSS, 
- Preparation: Go to the folder `website_2024/themes/PyCon-Israel-Flex`,
  and there run the command `npm install`
- "Compilation" (mostly of the Less sources): Run the command
  `npm run build`
  
When you want to build the site itself, use `make html` from the
`website_2024` folder. It puts the built site in `output`. You
can use `make clean` to remove everything if you want to rebuild
from scratch; but it doesn't clean the theme files.

The home page is currently defined in the template
`website_2024/themes/PyCon-Israel-Flex/templates/index.html`. In the
original template that came with the Flex theme, this page lists
articles (blog posts), but we don't want that. The original template
was kept for reference as `index.html.orig`. Also for reference, we
kept the PyCon Israel 2023 home-page at
`website_2024/content/pages/index.html.2023`. The intention is to
change things so that the home page is defined like other pages,
using a `index.md` file in `content/pages`, but we'll get there
later.

Other interesting files to look at:
- The settings are defined in `website_2024/pelicanconf.py` (we are
  not publishing yet, "production" should use `publishconf.py`)
- The sidebar is defined in
  `website_2024/themes/PyCon-Israel-Flex/templates/partial/sidebar.html`
- The footer (currently still default, to be changed) is in 
  `website_2024/themes/PyCon-Israel-Flex/templates/partial/footer.html`
- All (non-partial) templates extend
  `website_2024/themes/PyCon-Israel-Flex/templates/base.html` -- that
  means that template defines structure for everything.

References of software used:
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
