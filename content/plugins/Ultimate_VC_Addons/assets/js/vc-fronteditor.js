(function($) {
	"use strict";
	$(window).load(function(){
		jQuery(".smile_icon_list").each(function(index, element) {
            var style = jQuery(this).data('style');
			var font = jQuery(this).data('fonts');
			jQuery(this).find(".icon_list_icon").attr('style',style);
			jQuery(this).find(".icon_list_item").attr('style',font);
        });
	});
})(jQuery);