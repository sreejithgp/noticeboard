// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  if (!$("#search_location").val() && !localStorage.getItem('searched-location')){
    var enjoyhint_instance = new EnjoyHint({});
    var enjoyhint_script_steps = [
      {
        'click #search-form' : 'Search based on location'
      },  
    ];
    enjoyhint_instance.set(enjoyhint_script_steps);
    enjoyhint_instance.run();
  }
  if ($(".tags h1").children().length > 0 && !localStorage.getItem('tags-found')){
    var enjoyhint_instance_tag = new EnjoyHint({});
    var enjoyhint_tag_steps = [
      {
        'click .tags' : 'filter out based on tags'
      },  
    ];
    enjoyhint_instance_tag.set(enjoyhint_tag_steps);
    enjoyhint_instance_tag.run();
  }
  if ($("#add-new").length > 0)
    localStorage.setItem('new-add','true');
  if ( localStorage.getItem('searched-location') && localStorage.getItem('tags-found') && !localStorage.getItem('new-add')){
    var enjoyhint_instance_new = new EnjoyHint({});
    var enjoyhint_new_steps = [
      {
        'click #note-1' : 'Pin a new Add and it will remain in the notice board for 1 week'
      },  
    ];
    enjoyhint_instance_new.set(enjoyhint_new_steps);
    enjoyhint_instance_new.run();
  }
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
