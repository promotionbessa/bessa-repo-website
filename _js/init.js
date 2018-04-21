(function($){
  $(function(){
    var options = [
      {selector: '.myli', offset: 400, callback: function(el) {
         Materialize.showStaggeredList($(el));
       } },
       {selector: '.myli1', offset: 400, callback: function(el) {
          Materialize.showStaggeredList($(el));
        } },
        {selector: '.myli2', offset: 400, callback: function(el) {
           Materialize.showStaggeredList($(el));
         } },
         {selector: '.myli3', offset: 400, callback: function(el) {
            Materialize.showStaggeredList($(el));
          } },
          {selector: '.partner-images img', offset: 400, callback: function(el) {
             Materialize.fadeInImage($(el));
           } },

    ];
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    Materialize.scrollFire(options);
    $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    dots: true,
    loop: true,
    animateIn: true,
    animateOut: "fadeOut"
  });

  function getCaption(){
      if ($(".bellecolline").length ) {
        var captionbellecolline = $(".bellecolline .owl-item.active .item").children();
        var myTextbellecolline =  captionbellecolline.data().caption;
        $(".alt-stuff-bellecolline").text(myTextbellecolline);
      }
      if ($(".garden").length ) {
      var captionGarden = $(".garden .owl-item.active .item").children();
      var myTextGarden = captionGarden.data().caption;
      $(".alt-stuff-garden").text(myTextGarden);
}
if ($(".midelt1").length ) {

      var captionMidelt1 = $(".midelt1 .owl-item.active .item").children();
      var myTextMidelt1= captionMidelt1.data().caption;
      $(".alt-stuff-midelt1").text(myTextMidelt1);
}
      if ($(".midelt3").length ) {
      var captionMidelt3 = $(".midelt3 .owl-item.active .item").children();
      var myTextMidelt3= captionMidelt3.data().caption;
      $(".alt-stuff-midelt3").text(myTextMidelt3);
}
if ($(".massiva").length ) {
      var captionMassiva= $(".massiva .owl-item.active .item").children();
      var myTextmassiva= captionMassiva.data().caption;
      $(".alt-stuff-massiva").text(myTextmassiva);
}
if ($(".fusion").length ) {

      var captionFusion= $(".fusion .owl-item.active .item").children();
      var myTextfusion= captionFusion.data().caption;
      $(".alt-stuff-fusion").text(myTextfusion);
}
if ($(".sapins2").length ) {
      var captionSapins2= $(".sapins2 .owl-item.active .item").children();
      var myTextsapins2= captionSapins2.data().caption;
      $(".alt-stuff-sapins2").text(myTextsapins2);

  }
}
$(".owl-carousel.smart").on('changed.owl.carousel', function(event) {
  event.preventDefault();
    getCaption()

  });

  if ( $(".smart").length ){
    getCaption()

  }
  $(".avancement").on("click",getCaption)

    $('.parallax').parallax();

    $('.button-collapse').sideNav();
    $(window).load(function() {
       $('.preloader').fadeOut();
    });

    $('.modal').modal();

  $('.materialboxed').materialbox();
    $('select').material_select();
    $('ul.tabs').tabs();
    $(".dropdown-button").dropdown({ hover: true });
     $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: true, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
         //  gutter: 0, // Spacing from edge
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'left', // Displays dropdown with edge aligned to the left of button
         //  stopPropagation: true // Stops event propagation
        }
      );
     
  }); // end of document ready
})(jQuery); // end of jQuery name space
