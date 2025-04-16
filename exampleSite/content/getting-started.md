---
title: Getting started
---

## Prerequisites

* [Hugo Extended](https://gohugo.io/installation/windows/) v0.146 or higher
* [Dart Sass](https://sass-lang.com/dart-sass/) v1.86.3 or higher

## Installing the theme

### As a Git submodule (recommended)

1. If you haven't already, initialize Git submodule in your current site repository
   ```bash
   git submodule init
   ```

2. Add the theme as a submodule
   ```bash
   git submodule add git@github.com:jwtay1/hugo-theme-janssen.git themes/
   ```

3. Edit your site's configuration (e.g., ``hugo.toml``):
   ```toml
   theme = 'hugo-theme-janssen'
   ```

4. To update the theme
   ```bash
   git submodule update
   ```

### Direct download

1. Download the files from the repo and extract it in your site's ``theme`` folder.

2. Edit your site's configuration (e.g., ``hugo.toml``):
   ```toml
   theme = 'hugo-theme-janssen'
   ```