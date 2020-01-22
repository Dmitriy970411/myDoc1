
jQuery(function() {
  initMobileNav();
  initLinkAnimation();
});

// mobile menu init
function initMobileNav() {
  jQuery('body').mobileNav({
      menuActiveClass: 'nav-active',
      menuOpener: '.nav-opener'
  });
}























