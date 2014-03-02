# Auctionet Embed

## Quick start
Add the script file in the ```<head>``` section.

```
<script data-host='//auctionet.com/assets/public/embed' src="//auctionet.com/assets/public/embed/js/auctionet-embed.1.0.2.min.js" id='auctioNetEmbedScript'></script>
```

Then add the embedd code wherever you want the widget:

```
  <script id='auctioNetEmbed'>
    auctioNet.init({
      companyId: 52,
      locale: 'de',
      heading: 'Some heading'
    });
  </script>
```
