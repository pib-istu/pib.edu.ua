///////////////////////////////////////////////////
// ShowHide plugin
// Author: Ashley Ford - http://papermashup.com
// Demo: Tutorial - http://papermashup.com/jquery-show-hide-plugin
// Built: 19th August 2011
///////////////////////////////////////////////////


(function (jQuery) {
  jQuery.fn.showHide = function (options) {
    //default vars for the plugin
    var defaults = {
        speed: 1000,
        easing: '',
        changeText: 0,
        showText: 'Show',
        hideText: 'Hide'

    };

    var options = jQuery.extend(defaults, options);

    if(jQuery(this).hasClass('divslide')) {
        jQuery(this).click(function () {
              var toggleDiv = jQuery(this).attr('data-rel');

              jQuery('.toggleDiv').not(toggleDiv).slideUp(options.speed, options.easing);
              // this var stores which button you've clicked
              var toggleClick = jQuery(this);
              // this reads the rel attribute of the button to determine which div id to toggle

              // here we toggle show/hide the correct div at the right speed and using which easing effect
              jQuery(toggleDiv).slideToggle(options.speed, options.easing, function() {
              // this only fires once the animation is completed
              if(options.changeText==1){
              jQuery(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
              }
              });

          return false;

        });

    };

    jQuery(document).click(function() {
        jQuery('.toggleDiv').slideUp(options.speed, options.easing); //hide the button
    });

    jQuery(".toggleDiv").click(function(e) {
        e.stopPropagation(); // This is the preferred method.
    });

    if(jQuery(this).hasClass('divslide2')) {
        jQuery(this).click(function () {
              var toggleDiv2 = jQuery(this).attr('data-rel2');
              jQuery('.toggleDiv2').not(toggleDiv2).slideUp(options.speed, options.easing);
              // this var stores which button you've clicked
              var toggleClick = jQuery(this);
              // this reads the rel attribute of the button to determine which div id to toggle

              // here we toggle show/hide the correct div at the right speed and using which easing effect
              jQuery(toggleDiv2).slideToggle(options.speed, options.easing, function() {
              // this only fires once the animation is completed
              if(options.changeText==1){
              jQuery(toggleDiv2).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
              }
              });

          return false;

        });
    };

    if(jQuery(this).hasClass('divslide3')) {
      jQuery(this).click(function () {
          var toggleDiv3 = jQuery(this).attr('data-rel3');
          jQuery('.toggleDiv3').not(toggleDiv3).slideUp(options.speed, options.easing);
          // this var stores which button you've clicked
          var toggleClick = jQuery(this);
          // this reads the rel attribute of the button to determine which div id to toggle

          // here we toggle show/hide the correct div at the right speed and using which easing effect
          jQuery(toggleDiv3).slideToggle(options.speed, options.easing, function() {
          // this only fires once the animation is completed
          if(options.changeText==1 ){
          jQuery(toggleDiv3).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
          }
        });

        return false;
      });
    };
  }
})(jQuery);

