$(document).ready(function(){
  var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top-90
      }, 1000 );
    });

    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function() {

        var sectionOffset = $(this.hash).offset().top-90;

        if ( sectionOffset <= scrollbarLocation + 90 ) {
          $(this).addClass('current-location');
          $(this).parent().siblings().children().removeClass('current-location');
        }
      })

    })

    //why section tab
var changeImageToggle = $('#change-image');
$('#nav-home-tab').on({
     'click': function(){
         changeImageToggle.fadeOut('slow', function() {
           changeImageToggle.attr('src','img/website_img.svg').fadeIn('slow');
         });
     }
 });

$('#nav-profile-tab').on({
     'click': function(){
         changeImageToggle.fadeOut('slow', function() {
           changeImageToggle.attr('src','img/logo_img.svg').fadeIn('slow');
         });
       }
 });

//map

});
