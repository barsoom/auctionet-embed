# Auctionet Embed

## Quick start
Add the script file in the ```<head>``` section.

```
<script data-host="//auctionet.com/embed" src="//auctionet.com/embed/js/auctionet-embed.v2.js" id="auctionet-embed-script"></script>
```

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
The text heading for the widget

### backgroundColors (optional)
These options are passed a JSON object :

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

### howManyItems (optional)
How many items should be displayed? Incremented in steps 5, 10, 15 and so on.

### initialFilter (optional) (default: bid_on)
The starting filter.

* 'bid_on' - Items with the latest bids.
* 'ending' - Items ending soon.
* 'recent' - Recently added items


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
