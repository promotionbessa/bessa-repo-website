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



    $('.parallax').parallax();

    $('.button-collapse').sideNav();
    $(window).load(function() {
       $('.preloader').fadeOut();
    });
       

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
