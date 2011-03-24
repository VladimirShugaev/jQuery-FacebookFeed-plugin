# jQuery FacebookFeed plugin

This is a jQuery plugin for grabbing and displaying facebook activity feed from public available entities.
It requires to have [jQuery](http://jquery.com/) and 
[jQuery Template Plugin](https://github.com/jquery/jquery-tmpl) to be loaded on page before running this plugin

## Using plugin

In order to use this plugin, first you need to load jquery, jquery template plugin and jquey facebookfeed plugin.

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js"></script>
    <script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.js"></script>
    <script type="text/javascript" src="jquery.facebookfeed.min.js"></script>

And then call facebookfeed plugin for container of your choise

    $("#feed").facebookfeed(parameters);

### Parameters

You can use several parameters in plugin call:
* id - id of the facebook entity
* template - template for formatting each feed entry
* limit - amount of messages to retrieve
* offset - amount of messages to skip from the begining
* until - unix timestamp of the end of period
* since - unix timestamp of the beginning of the period
