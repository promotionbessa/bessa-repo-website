(function($){
  console.log('hollla');
  $(document).ready(function(){
    $('.slider').slider({
      indicators: false
    });
    $('select').formSelect();

    $('.parallax').parallax();
    $("figure").mouseleave(
      function() {
        $(this).removeClass("hover");
      }
    );
  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });
  });
      
})(jQuery); // end of jQuery name space
