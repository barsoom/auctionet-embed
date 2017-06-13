# Auctionet Embed

## Versions and releasing the code

Edit `js/auctionet-embed.v2.js` to edit the one that most auction houses use. Some have copied it rather than hotlinking it (e.g. <http://www.goteborgsauktionsverk.se/auktioner/>, <https://www.kolonn.se/>).

Or edit `coffee/auctionet-embed.v2.beta.coffee` while running `bundle exec guard` to ensure it's converted to JS. That's a version with some additional features that Tomas started on.

Perhaps we should introduce a v3 at some point…

Once you have a `.js` file, you need to copy it to Auctionet and deploy it through there:

```
# Assuming you have Auctionet core mounted at ~/auctionet.
cp js/* ~/auctionet/public/embed/js/
```

## Quick start
Add the script file in the ```<head>``` section.

```
<script data-host="https://auctionet.com/embed" src="https://auctionet.com/embed/js/auctionet-embed.v2.js" id="auctionet-embed-script"></script>
```

For WordPress, you may want a plugin like <https://wordpress.org/plugins/scripts-n-styles/>.

Then add the embed code wherever you want the widget:

```
<script id="auctionet-embed">
  auctionet.init({
    companyId: 52,
    locale: "de"
  });
</script>
```

## Options

### companyId
The Auctionet Company id.

### locale
Language code for translations.

* 'de' - German
* 'en' - English
* 'sv' - Swedish

### heading (optional)

Override the text heading for the widget. Defaults to a localized string like "Online auctions" (TODO: They're not all online auctions, so we should change this).

Set to `false` to not have a heading.

### backgroundColors (optional)
These options are passed a JSON object:

```
backgroundColors: {
  image: '#ececec',
  meta: '#ececec'
}
```

* ```image``` - The background color behind the image.
* ```meta``` - The background color behind the metadata.

### textColors (optional)
These options are passed a JSON object :

```
textColors: {
  itemId: '#000',
  link: '#252525',
  heading: '#000',
  bidOrEstimateText: '#5d5d5d',
  bidOrEstimateValue: '#5d5d5d',
  endsAtText: '#5d5d5d',
  endsAtValue: '#5d5d5d'
}
```

### showLogo (optional)

Whether to show the Auctionet logo. Default is `true`.

### howManyItems (optional)
How many items should be displayed? Incremented in steps 5, 10, 15 and so on.

### initialFilter (optional) (default: bid_on)
The starting filter.

* 'bid_on' - Items with the latest bids.
* 'ending' - Items ending soon.
* 'recent' - Recently added items

### filtersBeforeItems (optional)

Should we show the filter links like "Latest bid" before the items, instead of after?

Defaults to `false`.


### Fully configured

```
<script id='auctionet-embed'>
  auctionet.init({
    companyId: 1,
    heading: 'Our latest items from Auctionet',
    backgroundColors: {
      image: '#ececec',
      meta: '#ececec'
    },
    textColors: {
      itemId: '#000',
      link: '#252525',
      heading: '#000',
      bidOrEstimateText: '#5d5d5d',
      bidOrEstimateValue: '#5d5d5d',
      endsAtText: '#5d5d5d',
      endsAtValue: '#5d5d5d'
    },
    locale: 'en',
    howManyItems: 5,
    initialFilter: 'bid_on'
  });
</script>
```

## Further styling

Add CSS targeting the rendered embed HTML, e.g.:

```
<style type="text/css">
  /* Style the embed widget */
  #auctionet-header { display: none; }
</style>
```

Keep this to a minimum, since we want the freedom to change the markup (though perhaps we should then also bump the version?).

Try to use non-fragile CSS rules, i.e. avoiding nested selectors, and using IDs or classes rather than relying on element names and nesting.

### Local development server

    bundle
    rackup

    # or if you want to bind it to a specific ip
    #rackup --host 192.168.50.51

Then visit [http://localhost:9292/index.html](http://localhost:9292/index.html).

### Running smoke tests

You can run a raketask that checks if the page can be shown including items from the API.

    bundle
    rake
