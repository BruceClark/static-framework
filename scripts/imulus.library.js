// Imulus.Library 
// Imulus Global Javscript Libary
// A store for globally available functions
// Be careful polluting the global namespace, kthx
 

// Tests whether an element supports a particular attribute
function elementSupportsAttribute(element, attribute) {
	var test = document.createElement(element);
	if (attribute in test) {
		return true;
	} else {
		return false;
	}
};


// Open all external links in a new window
// $('a[href^="http://"],a[href^="https://"]').filter(function() {
//	 return this.hostname && this.hostname !== location.hostname;
// }).attr('target', '_blank');



