# Auctionet Embed

Embeds a list of items from auctionet.com for a specific company. One place of many where it's used: https://www.kolonn.se/.

# API Versions

* [V2](README.v2.md)
* [V3](README.v3.md)

### Local development server

    bundle
    rackup

    # or if you want to bind it to a specific ip
    rackup --host 192.168.50.51

Then visit [http://localhost:9292/index.html](http://localhost:9292/index.html).

### Smoke tests

#### Prerequisites

You need to have docker and docker-compose installed.

Also if you want to be able to debug, you need a VNC viewer installed.

Before you run the test, you need to build the docker images.

    rake build

#### Running test

You can run a raketask that checks if the page can be shown including items from the API.

    rake test

If you need to debug for some reason you can do that via VNC. (NOTE: The password is: secret)

Start you VNC viewer and use http://localhost:5900

    rake debug

#### Deploying to auctionet

When you are feeling confident everything works, just copy the newly built js file(s) into auctionet (public/embed/js).
Remember that you have rake running in order for it to pick up and build the js-file. So if the js-file is not up to date, just start rake and touch the file you want rebuilt.
