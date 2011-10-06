/*
 * jQuery.preloadImages - jQuery Plugin
 * reloads images
 */

;(function($){
	var cache = [];

	// preloades images passed as arguements
	$.preloadImages = function(imgs, callback)
	{
		// set defaults
		var imgs = (typeof imgs == 'string') ? [imgs] : imgs || [];
		var callback = callback || function(){};

		// iterate through each image
		$.each(imgs, function(i, img){
			// create image and call callback on load
			var img = $('<img />').load(callback).attr('src', img).get(0);

			cache.push(img);
		});
	}
})(jQuery);