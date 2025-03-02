# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys

sys.path.append(os.curdir)
from pelicanconf import *

# If your site is available via HTTPS, make sure SITEURL begins with https://
# Note in SITEURL, we use `or` rather than a default, to handle
# correctly the case that the env var is set to empty
SITEURL = os.environ.get("PLCN_SITEURL") or "https://pycon.org.il/2024"
RELATIVE_URLS = False

FEED_DOMAIN = SITEURL
FEED_ATOM = "feeds/updates.atom.xml"
FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/{slug}.atom.xml"

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

# DISQUS_SITENAME = ""
# GOOGLE_ANALYTICS = ""

# Support for alternate, test deployments
try:
    from alternateconf import *
except ImportError:
    pass
