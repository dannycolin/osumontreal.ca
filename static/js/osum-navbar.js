/* OSUM Navbar
 *
 * TODO:
 *  - Add ability to reduce navbar height on scrolldown
 *  - Change the offset to match DDG behavior where it addition ScrollPosition
 *    and ScrollOffset so everytime that the navbar is visible and you scrolldown
 *    it takes the same among of pixel to hide again.
 *  - Look if I and can move to `let` instead of `var`.
 *  - Look if I should use OOP instead of anonymous function for namespacing.
 *  - Do not show the navbar on scroll up a dropdown menu is opened.
 *
 * --------------------------------------------------------------------------- */

if (typeof Osum === 'undefined') {
  var Osum = {};
}

(function(Osum) {
  'use strict';

  var Navbar = {};
  var NavbarElem = document.querySelector(".navbar");
  var NavbarScrollOffset = NavbarElem.offsetHeight;
  var NavbarScrollPosition = window.scrollY;
  var NavbarToggler = document.querySelector(".navbar-toggler");

  Navbar.onScroll = function() {
    // Prevent Navbar to show on scroll up if the mobile menu is expanded
    if (NavbarToggler.getAttribute("aria-expanded") == "true") {
      return;
    }

    if (window.scrollY > NavbarScrollOffset) {
      if (window.scrollY > NavbarScrollPosition) {
        NavbarElem.style.transition = "top 0.3s";
        NavbarElem.style.top = -Math.abs(NavbarElem.offsetHeight) + "px";
      } else {
        NavbarElem.style.top = "0";
      }
    }
    NavbarScrollPosition = window.scrollY;
  };

  window.addEventListener('scroll', Navbar.onScroll, false);
  window.Osum.Navbar = Navbar;

})(window.Osum);
