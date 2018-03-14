# design-system
A prototype of the Design System created Rackspace Experience Design. This site is a resource (website) to begin displaying the styles from the upcoming design system created by the RED (Rackspace Experience Design) team.

## Running the site

Ensure ruby is installed on your system and run the following.

``` bash
bundle install
bundle exec jekyll serve --watch --config _config.yml,_dev-config.yml
```

## Alternative local build with Docker

1. Get Docker for your local system. For Mac, this would be Docker for Mac. For Windows, Docker for Windows. For Linux, Docker.

1. Get the branch you want to build (you can go through git/GitHub Desktop or [download a ZIP](https://stackoverflow.com/a/18583977/9200106])). Example: [Checking out a PR, steps 1-6](https://help.github.com/articles/checking-out-pull-requests-locally/#modifying-an-inactive-pull-request-locally)

1. Open a terminal.

1. Navigate to the place where your copy of the branch is (`cd` for most terminals).

1. Run the following command to build and deliver the site:

```bash
./build-me.sh
```

1. Once it says "Server running... press ctrl-c to stop.", copy the url from the previous line (generally `http://0.0.0.0:4000`), and paste it into your browser's URL bar. Hit enter to go there.

1. Browse the sample site.

1. Once you're done, go to your terminal. Hit **CTRL+C**.
