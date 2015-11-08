$(document).ready(function(){
    //hover function not needed yet//
//        animationHover('.fb','bounceIn');
//        animationHover('.tw','bounceIn');
//           
//        function animationHover(element, animation){
//            element = $(element);
//            element.hover(
//              function() {
//                element.addClass('animated ' + animation);
//              },
//              function(){
//                window.setTimeout( function(){
//                  element.removeClass('animated ' + animation);
//                }, 500);
//              }
//            );
//          };

// jQuery for page scrolling feature - requires jQuery Easing plugin
                        //----------------------------nav-scrolling----------------------------------------//

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict


//------------------------------- end of nav-scrolling ----------------------------------------------//

    
//    //Sort random function
//  function random(owlSelector){
//    owlSelector.children().sort(function(){
//        return Math.round(Math.random()) - 0.5;
//    }).each(function(){
//      $(this).appendTo(owlSelector);
//    });
//  }
 
 
 
  $('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
  
  $('#img1').css("display", "block");
  
  $("#li1").hover(
  function() {
    $('#img1').css("display", "block");
//    $('#img1').addClass(' animated fadeIn');
    $('#img2').css("display", "none");
    $('#img3').css("display", "none");
    $('#img4').css("display", "none");
    $('#img5').css("display", "none");
    $('#img6').css("display", "none");
  });
 
  $("#li2").hover(
  function() {
    $('#img2').css("display", "block");
//    $('#img2').addClass(' animated fadeIn');
    $('#img1').css("display", "none");
    $('#img3').css("display", "none");
    $('#img4').css("display", "none");
    $('#img5').css("display", "none");
    $('#img6').css("display", "none");
    
  });
  $("#li3").hover(
  function() {
    $('#img3').css("display", "block");
//    $('#img3').addClass(' animated fadeIn');
    $('#img1').css("display", "none");
    $('#img2').css("display", "none");
    $('#img4').css("display", "none");
    $('#img5').css("display", "none");
    $('#img6').css("display", "none");
    
  });
  $("#li4").mouseover(
  function() {
    $('#img4').css("display", "block");
//    $('#img4').addClass(' animated fadeIn');
    $('#img1').css("display", "none");
    $('#img3').css("display", "none");
    $('#img2').css("display", "none");
    $('#img5').css("display", "none");
    $('#img6').css("display", "none");
    
  });
  $("#li5").hover(
  function() {
    $('#img5').css("display", "block");
//    $('#img5').addClass(' animated fadeIn');
    $('#img2').css("display", "none");
    $('#img3').css("display", "none");
    $('#img4').css("display", "none");
    $('#img1').css("display", "none");
    $('#img6').css("display", "none");
    
  });
  $("#li6").hover(
  function() {
    $('#img6').css("display", "block");
//    $('#img6').addClass(' animated fadeIn');
    $('#img2').css("display", "none");
    
    $('#img3').css("display", "none");
   
    $('#img4').css("display", "none");
   
    $('#img5').css("display", "none");
   
    $('#img1').css("display", "none");
    
    
  });
  
  
  
  
  
 
    
    });
 

