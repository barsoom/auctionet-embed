/*yepnope1.5.x|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);

// Auctionet Plugin
(function (window) {
  "use strict";

  var scriptTag = '',
        host = '',
        ONE_DAY = 1000 * 60 * 60 * 24,
        ONE_HOUR = 1000 * 60 * 60,
        ONE_MINUTE = 1000 * 60;

  var locales = {
    en: {
      days: 'days',
      day: 'day',
      hours: 'hours',
      min: 'min',
      price: 'Estimate',
      time: 'Time left',
      bids: 'Bids',
      bid: 'Bid',
      noObjectsFound: 'No items were found',
      heading: 'Online auctions',
      popularItems: 'Recently bid on',
      lastestItems: 'Recently added',
      endingSoon: 'Ending soon',
      seeAll: 'See all'
    },
    de: {
      days: 'Tage',
      day: 'Tag',
      hours: 'Stunden',
      min: 'Min.',
      price: 'Schätzwert',
      time: 'Restzeit',
      bids: 'Gebote',
      bid: 'Gebot',
      noObjectsFound: 'Keine Artikel wurde gefunden',
      heading: 'Online-Auktionen',
      popularItems: 'Beliebte Artikel',
      lastestItems: 'Neueste Artikel',
      endingSoon: 'Bald endende Auktionen',
      seeAll: 'Alle ansehen'
    },
    sv: {
      days: 'dagar',
      day: 'dag',
      hours: 'timmar',
      min: 'minuter',
      price: 'Utropspris',
      time: 'Tid kvar',
      bids: 'Bud',
      bid: 'Bud',
      noObjectsFound: 'Inga föremål hittades',
      heading: 'Nätauktioner',
      popularItems: 'Senaste bud',
      lastestItems: 'Senast inkommet',
      endingSoon: 'Slutar snart',
      seeAll: 'Se alla'
    }
  };

  window.auctionet = {
    defaults : {
      companyId: null,
      heading: null,
      showLogo: true,
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
        endsInText: '#5d5d5d',
        endsAtValue: '#5d5d5d'
      },
      locale: 'sv',
      howManyItems: 5,
      initialFilter: 'bid_on'
    },

    init : function (options) {
      var auctionet = this;

      // TODO: Implement DOM-ready to catch later loaded jQuery.
      yepnope([{
          test: window.jQuery,
          nope: '//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js'
        }, {
          test: window._,
          nope: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js'
        }, {
          test: window.Hogan,
          nope: '//twitter.github.com/hogan.js/builds/2.0.0/hogan-2.0.0.min.js',
          complete: function () {
            jQuery(function() {
              scriptTag = jQuery("#auctionet-embed-script");
              // Make our embeded code work with previous versions of JQuery
              //
              // The .data() method was introduced in JQuery 1.4.3, read more about it:
              // http://blog.jquery.com/2010/10/16/jquery-143-released/
              host = scriptTag.attr('data-host');

              auctionet.embed(options);

              yepnope([{
                load: [host + '/css/auctionet-embed.v2.css', '//fonts.googleapis.com/css?family=Open+Sans:300italic,300,600.css']
              }]);
            });
          }
        }]);
    },

    embed : function(options) {
      var document = window.document

      this.settings = _.defaults(options, this.defaults);
      this.setLocale();
      this.setHeading();

      var data = {
        textColors: this.settings.textColors,
        text: this.text,
        heading: this.settings.heading,
        host: host,
        linkUrl: this.linkUrl()
      };

      var renderedTemplate = this.wrapperTemplate().render(data);

      jQuery('#auctionet-embed').after(renderedTemplate);
      jQuery('#auctionet-buttons a:not(.all)').click(_.bind(this.onClickObjectButton, this));
      jQuery("#auctionet-buttons a[rel=" + this.settings.initialFilter + "]").trigger('click');

      this.externalItems = jQuery('#external-items');
      this.loadExternalItems(this.settings.initialFilter);
    },

    setLocale : function() {
      this.text = locales[this.settings.locale];
    },

    setHeading : function() {
      if (this.settings.heading === null) {
        this.settings.heading = this.text.heading;
      } else {
        return;
      }
    },

    timeDifference : function (date1, date2) {
      var  date1_ms = date1.getTime(),
            date2_ms = date2.getTime(),
            difference_ms = Math.abs(date1_ms - date2_ms),
            dayAmount = difference_ms/ONE_DAY,
            diff = '';

      if (dayAmount < 1.0) {
        if (difference_ms > ONE_HOUR) {
          diff = Math.round(difference_ms/ONE_HOUR) + ' ' + this.text.hours;
        } else {
          diff = Math.round(difference_ms/ONE_MINUTE) + this.text.min;
        }
      } else {
        diff = this.pluralizeDays(dayAmount);
      }

      return diff;
    },

    pluralizeDays : function (dayAmount) {
      var text = '',
            roundedDays = Math.round(dayAmount);

      if (roundedDays === 1) {
        text = roundedDays + ' ' + this.text.day;
      } else {
        text = roundedDays + ' ' + this.text.days;
      }
      return text;
    },

    drawItem : function (item) {
      var data = {
        id: item.id,
        title: this.truncateItemTitle(item.title),
        itemLinkUrl: item.url,
        imageUrl: item.images[0].thumb,
        bidOrEstimateText: this.bidOrEstimateText(item),
        bidOrEstimateValue: this.bidOrEstimateValue(item),
        endsInText: this.text.time,
        endsInValue: this.timeDifference(new Date(), new Date(item.ends_at * 1000)),
        textColors: this.settings.textColors,
        backgroundColors: this.settings.backgroundColors
      };

      return this.itemTemplate().render(data);
    },

    itemTemplate : function () {
      var template = '<li><div class="object-image" style="background-color: {{backgroundColors.image}}"><a href="{{itemLinkUrl}}"><img src="{{imageUrl}}" alt="{{title}}" /></a></div><a class="object-link" href="{{itemLinkUrl}}" style="color: {{textColors.link}}"><strong style="color: {{textColors.itemId}}">{{id}}.</strong> {{title}}</a><dl style="background-color: {{backgroundColors.meta}}"><dt class="border" style="color: {{textColors.bidOrEstimateText}}">{{bidOrEstimateText}}</dt><dd class="border" style="color: {{textColors.bidOrEstimateValue}}">{{bidOrEstimateValue}}</dd><dt style="color: {{textColors.endsInText}}">{{endsInText}}</dt><dd style="color: {{textColors.endsAtValue}}">{{endsInValue}}</dd></dl></li>';
      var compiledTemplate = Hogan.compile(template);
      return compiledTemplate;
    },

    wrapperTemplate : function () {
      var logoTemplate = "";
      if(this.settings.showLogo) {
        logoTemplate = '<a href="{{linkUrl}}"><img src="{{host}}/img/logo.png" width="300" height="42" /></a>';
      }

      var template = '<div id="auctionet-wrapper"><div id="auctionet-header"><h2 style="color: {{textColors.heading}}">{{heading}}</h2>' + logoTemplate + '</div><ul id="external-items"></ul><div id="auctionet-buttons"><a href="javascript:void(0)" rel="bid_on" class="objects-btn active">{{text.popularItems}}</a><a href="javascript:void(0)" rel="recent" class="objects-btn">{{text.lastestItems}}</a><a href="javascript:void(0)" rel="ending" class="objects-btn">{{text.endingSoon}}</a><span class="button-divider"> | </span><a href="{{linkUrl}}" class="objects-btn all">{{text.seeAll}}</a></div></div></div>';
      var compiledTemplate = Hogan.compile(template);
      return compiledTemplate;
    },

    truncateItemTitle : function (title) {
      return title.length > 36 ? title.substring(0, 36) + '...' : title;
    },

    bidOrEstimateValue : function(object) {
      if (object.bids.length > 0) {
        return object.bids[0].amount + ' ' + object.currency;
      } else {
        return object.estimate + ' ' + object.currency;
      }
    },

    bidOrEstimateText : function(object) {
      var bidAmount = object.bids.length;
      var pluralizedBids = bidAmount > 1 ? this.text.bids : this.text.bid;

      if (bidAmount > 0) {
        return bidAmount + ' ' + pluralizedBids;
      } else {
        return this.text.price;
      }
    },

    displayNoItemsFound : function (response) {
      var htmlString = '<li><h4>' + this.text.noObjectsFound + '</h4></li>';
      this.externalItems.html(htmlString);
    },

    displayExternalItems : function (items) {
      var htmlString = '';
      _.each(items, _.bind(function(element, index, list) {
        htmlString += this.drawItem(items[index]);
      }, this));
      this.externalItems.html(htmlString);
    },

    loadedItems : function (responseObject) {
      if (responseObject && responseObject.items) {
        this.displayExternalItems(responseObject.items);
      }
    },

    apiUrl: function (filter) {
      return 'https://auctionet.com/api/v2/items.json?locale=' + this.settings.locale + '&company_id=' + this.settings.companyId + '&order=' + filter + '&per_page=' + this.settings.howManyItems;
    },

    linkUrl: function () {
      return 'https://auctionet.com/' + this.settings.locale + '/search?company_id=' + this.settings.companyId;
    },

    loadExternalItems : function (filter) {
      jQuery.ajax({
        url: this.apiUrl(filter),
        dataType: 'jsonp',
        success: _.bind(this.loadedItems, this),
        error: this.displayNoItemsFound
      });
    },

    onClickObjectButton : function (e) {
      e.preventDefault();

      var self = jQuery(e.target),
           filter = self.attr('rel');

      self.addClass('active');
      self.siblings(':not(.all)').removeClass('active');

      this.loadExternalItems(filter);
    }
  };
} (window) );
