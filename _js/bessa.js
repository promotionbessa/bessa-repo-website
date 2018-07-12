
$(document).ready(function(){
  "use strict"
  function smoothScroll (duration) {
  	$('a[href^="#introduction"]').on('click', function(event) {

  	    var target = $( $(this).attr('href') );

  	    if( target.length ) {
  	        event.preventDefault();
  	        $('html, body').animate({
  	            scrollTop: target.offset().top
  	        }, duration);
  	    }
  	});
  }
    smoothScroll(300);


// mobile menu
$(".sub-mobile-trigger").click(function(){

  var stylesMobile= {
    background: "#f5f5f5",

  }
  $(this).toggleClass("bessa-bg-red");
  $(this).find(">a").toggleClass("white-text");
  $(this).children().toggleClass("sub-menu-active");
  $(" ul.sub-mobile-items").css(stylesMobile)
});


// sidebar opening and closing
function sidebarToggler(){
  $(".sidbar-trigger").toggleClass("change");
  $(".sidebar .social").toggle();
}
function checkSidebarOpen(){
  var test= $(".sidebar .social").css("display");
  if( test=== "block" ){
    sidebarToggler();
    }
}

  $(".sidbar-trigger").on("click",sidebarToggler)




   $('.slider').slider({
     height: 600,
     indicators: false
   });


// scrolling configuration ? get the dimensions of te footer and container
var $containerWidth= $(".bg-bessa").width();
var $footerHeight= $("footer").outerHeight();
var $nav = $(".navbar-fixed nav");
var $main =$('main');
var $navHeight= $nav.height();

$( window ).resize(function() {
  $navHeight= $nav.outerHeight()
   $containerWidth= $(".bg-bessa").width();
   $footerHeight= $("footer").outerHeight();
   setFooter();
   setNavbar();
});
function setNavbar(){
  $nav.css("width",$containerWidth)
  $main.css('marginTop,$navHeight');
  console.log($navHeight,$main)
}
function setFooter(){
  $("footer").css("width",$containerWidth);
  $(".bg-bessa").css("marginBottom",$footerHeight);
}
setFooter();
setNavbar();
$(window).load(function() {
  $containerWidth= $(".bg-bessa").width();
  $footerHeight= $("footer").outerHeight();
   $('.preloader').fadeOut();
   setFooter();
   setNavbar();
});
var amimationSettings ={
  fast: 200,
  medium: 400,
  slow: 600
}
// scrolling effects

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  // cards animation
  if( ( $("#introduction").length) && wScroll > $("#introduction").offset().top - ($(window).height()/1.2) ){
    $(".card").each(function(i){
      setTimeout(function(){
          $(".card").eq(i).addClass("is-showing");
      },amimationSettings.fast*(i+1));

  });
}


// newsletter animation
if( ( $(".newsletter-container").length ) && wScroll > $(".newsletter-container").offset().top - ($(window).height()/1.2) ){
  $(".newsletter-container").addClass("newsletter-showing");
}
if(( $(".quote-media").length ) && wScroll > $(".quote-media").offset().top - ($(window).height()/1.2) ){
  $(".quote-media").addClass("newsletter-showing");
}

// avantages section animation

if( ( $(".value").length ) && wScroll > $(".value").offset().top - ($(window).height()/1.2) ){
  $(".val").each(function(i){
    setTimeout(function(){
          $(".val").eq(i).addClass("is-showing");
    },amimationSettings.fast *(i+1));

})
}
});


 });
