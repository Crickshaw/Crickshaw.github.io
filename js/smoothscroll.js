$(document).ready(function() {
	$('.navbar-collapse ul li a[href*=#]:not([href=#])').on('click', function(event) {

	// Make sure this.hash has a value 
	// before overriding default behavior
	if(this.hash !== "") {
	
	// prevent default anchor click behavior
	event.preventDefault();

	// store hash
	var hash = this.hash;

	// animate
	$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 700, function() {

		// when done, add hash to url
		// (default click behavior)
		window.location.hash = hash;
			});
		} // End if
	});
});

$("#back-to-top a[href='#']").on('click', function(event) {

	// prevent default anchor click behavior
	event.preventDefault();

	// store hash
	var hash = this.hash;

	// animate
	$('html, body').animate({
		scrollTop: $(hash).offset().top -50
	}, 700, function() {

		// when done, add hash to url
		// (default click behavior)
		window.location.hash = hash;
	});

});