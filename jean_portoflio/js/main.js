
// When the user clicks on the hamburger icon (.hamburger)
// Slide toggle the main nav (.main-nav)


// Set a variable currentImageNumber to keep track of which image number we're on (starts at 0)


$(document).ready(function(){
  switchImages();
});


function switchImages () {
  var img1= $('#img1');
  var img2= $('#img2');
  var img3= $('#img3');
  var img4= $('#img4');
  img1.css("display","inline-block");
  img1.fadeOut(8000, function () {
    img2.fadeIn(8000, function () {
      img2.fadeOut(8000, function () {
        img3.fadeIn(8000, function () {
          img3.fadeOut(8000, function () {
            img4.fadeIn(8000, function () {
              img4.fadeOut(8000, function () {
                switchImages();
              })
            })
          })
        })
      })
    })
  })
}

// img3.animate({
//   opacity: 0
// }, 3000, function(){
//
//   img2.fadeIn();
// }, 3000, function(){
//
//   img3.fadeIn();
// }, 3000, function(){
//
//   img2.fadeIn();
// });
// var imgary= [img1, img2, img3, img4]

// for(var i=0; i<imgary.length; i++){
// imgary[i].show();
// }











// Every five seconds
// setInterval(function(){
//   console.log('Hello!');
//
//   if (currentImageNumber < 3) {
//     currentImageNumber += 1;
//
//   }
//
//   else {
//     currentImageNumber =0;
//   }






//If we're not on the last image (currentImageNumber is less than 3)
// add one to currentImageNumber
// else
// Set currentImageNumber to zero

// Hide all images
// Fade in the current image
// }, 5000);



$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
