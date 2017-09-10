$(document).ready(function() {

  for (var i = 0; i < 6; i++) {
    ratingGenerator(i)
  }
  // END //
});

function ratingGenerator(i) {
  var rating;
  $('.rating-circle' + i).hover(function() {
    if (rating) {
      rating.removeClass('rating-chosen');
    }
    $(this).prevAll().addBack().addClass('rating-hover');
  });
  $('.rating-circle' + i).click(function() {
    var myStorage = window.localStorage;
    rating = $(this).prevAll().addBack();
    rating.addClass('rating-chosen');
    // myStorage.setItem(productName, JSON.stringify(dataObj));

  });
  $('.rating-circle' + i).mouseout(function() {
    $(this).prevAll().addBack().removeClass('rating-hover');
    if (rating) {
      rating.addClass('rating-chosen');
    }
  });
}
