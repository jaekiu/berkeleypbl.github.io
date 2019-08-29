/** VALUES FOR INDEX.HTML */
// Wrap every letter in a span
// var textWrapper = document.querySelector('#values-text');
// textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
//
// anime.timeline({loop: true})
//   .add({
//     targets: '#values-text .letter',
//     translateX: [40,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 1200,
//     delay: function(el, i) {
//       return 500 + 30 * i;
//     }
//   }).add({
//     targets: '#values-text .letter',
//     translateX: [0,-30],
//     opacity: [1,0],
//     easing: "easeInExpo",
//     duration: 1100,
//     delay: function(el, i) {
//       return 100 + 30 * i;
//     }
//   });

/** GO FAR WITH US ANIMATION FOR APPLY.HTML */
// Wrap every letter in a span
var textWrapper2 = document.querySelector('#recruitment-text');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '#recruitment-text .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '#recruitment-text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  $(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('div.timeline-info').offset().top }, 'slow');
     return false;
   });
 });

 // scroll functions
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }

});
