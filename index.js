var el = "#contactme";

    //Modernizr.csstransitions = false;

    if (Modernizr.csstransitions) {
      $(el).css({
        "transition": "all 500ms ease-in-out"
      });
    }

    var rot = 360;

    $(el).click(function(){
      if (rot===360) {
        rot = 180;
      } else {
        rot = 0;
      }
      if (Modernizr.csstransitions) {
        $(el).css({"transform": "rotate("+rot+"deg)"});
      } else {
        $(el).stop().animate(
          {rotation: rot},
          {
            duration: 500,
            step: function(now, fx) {
              $(this).css({"transform": "rotate("+now+"deg)"});
            }
          }
        );
      }
    });