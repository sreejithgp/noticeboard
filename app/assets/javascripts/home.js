// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  $("#search_location")
    .geocomplete()
    .bind("geocode:result", function (event, result) {
      $("#search_latitude").val(result.geometry.location.lat());
      $("#search_longitude").val(result.geometry.location.lng());
      $("#search-form").submit();
    });
  var containerW = 1100;
  var containerH = 750;
  var positions = [];
  var i = 0;
  $('.polaroid').each(function() {
    var coords = {
      w: $(this).outerWidth(true),
      h: $(this).outerHeight(true)
    };
    var success = false;
    while (!success)
    {
      coords.x = parseInt(Math.random() * (containerW-coords.w));
      coords.y = parseInt(Math.random() * (containerH-coords.h));
      var success = true;
      $.each(positions, function(){
        if (
          coords.x <= (this.x + this.w) &&
          (coords.x + coords.w) >= this.x &&
          coords.y <= (this.y + this.h) &&
          (coords.y + coords.h) >= this.y
        )
        {
          success = false;
        }
      });
    }
    positions.push(coords);
    $(this).css({
      top: coords.y + 'px',
      left: coords.x + 'px'
    });
    i += 1;
  });
});
