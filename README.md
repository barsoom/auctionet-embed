# Auctionet Embed

## Quick start
Add the script file in the ```<head>``` section.

```
<script data-host='//auctionet.com/embed' src="//auctionet.com/embed/js/auctionet-embed.1.0.6.min.js" id='auctioNetEmbedScript'></script>
```

Then add the embedd code wherever you want the widget:

```
<script id='auctioNetEmbed'>
  auctioNet.init({
    companyId: 52,
    locale: 'de'
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
  priceHeading: '#5d5d5d',
  priceValue: '#5d5d5d',
  timeHeading: '#5d5d5d',
  timeValue: '#5d5d5d'
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
<script id='auctioNetEmbed'>
  auctioNet.init({
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
      priceHeading: '#5d5d5d',
      priceValue: '#5d5d5d',
      timeHeading: '#5d5d5d',
      timeValue: '#5d5d5d'
    },
    locale: 'en',
    howManyItems: 5,
    initialFilter: 'bid_on'
  });
</script>
```
