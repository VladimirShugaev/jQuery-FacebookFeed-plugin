/*
 * jQuery FacebookFeed Plugin
 * Requires jQuery 1.4.2
 * Requires jQuery Templates Plugin 1.0.0pre
 * Author Vladimir Shugaev <vladimir.shugaev@junvo.com>
 * Copyright Vladimir Shugaev <vladimir.shugaev@junvo.com>
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function($){
    $.fn.facebookfeed=function(options){
		var settings={
			id: '145975662131224', //id of the facebook entity
			template: '<h4>${from.name}</h4><p>${message}</p><p>Read more:&nbsp;<a href="${link}">${name}</a></p>', //template for formatting each feed entry
			query: {},
			access_token: ''
		};
		if (options)
			$.extend(settings, options);
		var container=this;
		var requestURL='https://graph.facebook.com/'+settings.id+'/feed?access_token='+settings.access_token+'&'+$.param(settings.query)+'&callback=?'; //calback=? is required to get JSONP behaviour
		var template=$.template(null, settings.template);

		$.getJSON(requestURL, function(json){
			var messages=$.tmpl(template, json.data).appendTo(container);
		});
		return this;
	};
})(jQuery);