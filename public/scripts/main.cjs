/*
	Future Imperfect by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function ($) {
	var $body = $('body');
	var $menu = $('#menu');

	// Menu.
	$menu.appendTo($body).panel({
		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'right',
		target: $body,
		visibleClass: 'is-menu-visible',
	});
})(jQuery);
