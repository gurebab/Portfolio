$(document).ready(function(){

      $("#fullpage").fullpage({
        responsiveWidth: 1800,
        verticalCentered: false,
        scrollBar:true,
        anchors: ['section01','section02','section03','section04','section05','section06'],
        menu : '#menu'
    
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