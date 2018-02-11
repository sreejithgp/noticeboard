// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on("keyup", "#notice_description", function(){
  var desc_length = $(this).val().length;
  var remaining_length = 127 - desc_length;
  $("#desc-length").html(remaining_length);
});
$(document).ready(function(){
  $("#location")
    .geocomplete()
    .bind("geocode:result", function (event, result) {
      $("#latitude").val(result.geometry.location.lat());
      $("#longitude").val(result.geometry.location.lng());
    });
});
