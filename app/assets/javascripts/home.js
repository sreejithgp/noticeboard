// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  var enjoyhint_instance = new EnjoyHint({});
  var enjoyhint_script_steps = [
    {
      'click #search-form' : 'Search location for listing'
    },  
  ];
  enjoyhint_instance.set(enjoyhint_script_steps);
  if (!$("#search_location").val() && !localStorage.getItem('searched-location'))
    enjoyhint_instance.run();
  var enjoyhint_instance_tag = new EnjoyHint({});
  var enjoyhint_tag_steps = [
    {
      'click .tags' : 'filter out based on tags'
    },  
  ];
  enjoyhint_instance_tag.set(enjoyhint_tag_steps);
  if ($(".tags h1").children().length > 0 && !localStorage.getItem('tags-found'))
    enjoyhint_instance_tag.run();
  var enjoyhint_instance_new = new EnjoyHint({});
  var enjoyhint_new_steps = [
    {
      'click #note-1' : 'Create a new Add. Once submited an Add cannot be removed. It will be automatically removed after a week.'
    },  
  ];
  if ($("#add-new").length > 0)
    localStorage.setItem('new-add','true');
  enjoyhint_instance_new.set(enjoyhint_new_steps);
  if ( localStorage.getItem('searched-location') && localStorage.getItem('tags-found') && !localStorage.getItem('new-add'))
    enjoyhint_instance_new.run();
  $("#search_location")
    .geocomplete()
    .bind("geocode:result", function (event, result) {
      localStorage.setItem('searched-location','true');
      $("#search_latitude").val(result.geometry.location.lat());
      $("#search_longitude").val(result.geometry.location.lng());
      $("#search-form").submit();
    });

  if ($(".tags h1").children().length > 0)
    localStorage.setItem('tags-found','true');
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
