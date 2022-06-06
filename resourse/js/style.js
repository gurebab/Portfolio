$(document).ready(function(){
    new fullpage('#fullpage', {
        verticalCentered: false,
        scrollBar:true,
        anchors: ['anchor1', 'anchor2', 'anchor3','anchor4' , 'anchor5'],
      });

      var fill = $('.svg-logo').drawsvg({
        duration:300,
        easing: 'swing',
        reverse: false, 
    })
    fill.drawsvg('animate');
    
    $(".header_open").click(function(){
      $(this).toggleClass("active");
      $(".header_wrap").toggleClass("active");
    });

    $(".slide_item_wrap").slick({
      autoplay : true,
			autoplaySpeed : 1000,
      dots : false,
      arrows : false,
      fade : true,
    });
});