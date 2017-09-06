$(document).ready(function() {
  var rating;
	$('.rating-circle').hover(function () {
		if (rating) {
			rating.removeClass('rating-chosen');
		}
		$(this).prevAll().addBack().addClass('rating-hover');
	});
	$('.rating-circle').click(function () {
		rating = $(this).prevAll().addBack();
		rating.addClass('rating-chosen');
	});
	$('.rating-circle').mouseout(function () {
		$(this).prevAll().addBack().removeClass('rating-hover');
		if (rating) {
			rating.addClass('rating-chosen');
		}
	});
});
