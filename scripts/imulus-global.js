// Imulus Global Javscript Code

// Tests whether an element supports a particular attribute
function elementSupportsAttribute(element, attribute) {
	var test = document.createElement(element);
	if (attribute in test) {
		return true;
	} else {
		return false;
	}
};

$(document).ready(function() {
	// Add placeholder for search box
	if (!elementSupportsAttribute('input', 'placeholder')) {

		$('input[placeholder]').each(function(index) {
			var currentValue = $(this).val($(this).attr("placeholder"));
			$(this).addClass('inactive');

			$(this).focus(function() {
				if ($(this).val() == $(this).attr("placeholder")) {
					$(this).val("").removeClass('inactive');
				}
			});

			$(this).blur(function() {
				if ($(this).val() == "") {
					$(this).val($(this).attr("placeholder")).addClass('inactive');
				}
			});
		});

	}

	// Zebra stripe tables
	$("#main table tbody tr:nth-child(even)").addClass("even");

	// Open all external links in a new window
	// $('a[href^="http://"],a[href^="https://"]').filter(function() {
	//	 return this.hostname && this.hostname !== location.hostname;
	// }).attr('target', '_blank');

});
