# Auctionet Embed v3

## Versions and releasing the code

Edit `coffee/auctionet-embed.v3.coffee` while running `bundle exec guard` to ensure it's converted to JS.

Once you have a `.js` file, you need to copy it to Auctionet and deploy it through there:

    cp js/auctionet-embed.v3.js ~/auctionet/public/embed/js/auctionet-embed.v3.js

### Local development server

    bundle

    # If running within Devbox, you want to bind it to the right IP:
    rackup --host 192.168.50.51

Then visit <http://192.168.50.51:9292/index.v3.html>.

(Without devbox, skip `--host` and find the page on `http://localhost:9292`.)

## Quick start
Add the script file in the `<head>` section of the page.

The script depends on jQuery (any version from 1.11.0 onwards), which you must load yourself.

For example:

```
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script data-host="//auctionet.com/embed" src="//auctionet.com/embed/js/auctionet-embed.v3.js" id="auctionet-embed-script"></script>
```

Then add the embed code wherever you want the widget:

```
<script id="auctionet-embed">
  auctionet.init({
    companyId: 52,
    query: "chair",
    locale: "de",
    ended: false,
    howManyItems: 10,
  });
</script>
```

## Options

### companyId
The numeric Auctionet company ID. Ask Auctionet support if you don't know this.

### query
Any search query.

Examples:

    query: "chair"          # One word query
    query: "chair||table"   # Multi word query

### ended
Show active items or ended items.

    ended: false # Will show active items
    ended: true  # Will show ended items

### categoryId
Show items in a specific category.

### eventId
Shows items for a hammer event.

### locale
Language code for translations.

* "de" - German
* "en" - English
* "sv" - Swedish
* "es"" - Spanish

### heading (optional)
The text heading for the widget

### backgroundColors (optional)
These options are passed a JSON object :

```
backgroundColors: {
  image: "#ececec",
  meta: "#ececec"
}
```

* ```image``` - The background color behind the image.
* ```meta``` - The background color behind the metadata.

### textColors (optional)
These options are passed a JSON object :

```
textColors: {
  itemId: "#000",
  link: "#252525",
  heading: "#000",
  bidOrEstimateText: "#5d5d5d",
  bidOrEstimateValue: "#5d5d5d",
  endsAtText: "#5d5d5d",
  endsAtValue: "#5d5d5d"
}
```

### howManyItems (optional)
How many items should be displayed? Incremented in steps 5, 10, 15 and so on.

### initialFilter (optional) (default: bid_on)
The starting filter.

With ended: false (default):

* "bid_on" - Items with the latest bids.
* "ending" - Items ending soon.
* "recent" - Recently added items.

With ended: true:

* "end_desc" - The latest hammered (ended) items.
* "end_asc_archive" - The first hammered (ended) items.
* "bids_count_desc" - Ended items with most bids.

### showEuroWithSign (optional) (default: false)
Show amounts with a euro sign (€).

Example: 300 €

Example default: 300 EUR

### Fully configured

```
<script id="auctionet-embed">
  auctionet.init({
    companyId: 1,
    heading: "Our latest items from Auctionet",
    backgroundColors: {
      image: "#ececec",
      meta: "#ececec"
    },
    textColors: {
      itemId: "#000",
      link: "#252525",
      heading: "#000",
      bidOrEstimateText: "#5d5d5d",
      bidOrEstimateValue: "#5d5d5d",
      endsAtText: "#5d5d5d",
      endsAtValue: "#5d5d5d"
    },
    locale: "en",
    howManyItems: 5,
    initialFilter: "bid_on"
  });
</script>
```

### Auto compiling coffeescript to javascript

Run rake and when you edit and save a coffeescript file it will automatically convert it to javascript and put it into the js/ directory.
