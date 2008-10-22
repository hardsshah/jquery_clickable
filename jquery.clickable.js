(function($) {
  //
  // plugin definition
  //
  $.fn.clickable = function(options) {
    var opts = $.extend({}, $.fn.clickable.defaults, options);
	
		return this.each(function() {
      $(this).bind("click", function() {
        window.location = $(this).find("a:first").attr("href");
      });
      
      $(this).hover(opts.hover, opts.unhover);
		});
  };
  
  //
  // plugin defaults
  //
  $.fn.clickable.defaults = {
		hover: function() {},
		unhover: function() {}
  };
})(jQuery);