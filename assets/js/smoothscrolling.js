/*
 * smoothscrolling.js (uses jQuery)
 * 
 * This code was taken (and then slightly adapted) from https://css-tricks.com/snippets/jquery/smooth-scrolling/ after I watched a tutorial that referenced this website. I take no credit for this code.
 *
 */

// Select all links with hashes
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
    
    	var headerHeight = $(window).height(); // value in pixels
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - headerHeight*0.2 //scroll enough so that sticky header does not block title of target scrolled section
        }, 900, function() {
        });
      }
    }
  });
