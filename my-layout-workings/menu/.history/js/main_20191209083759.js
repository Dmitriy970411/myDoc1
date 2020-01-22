$(document).ready(function() {
   //activate to show as example on page load
    setTimeout(function(){
       $(".modal-mask").addClass('active');
       $(".menu-link").addClass('close');
       $("body").addClass("overlay");
    }, 750);
   
   // MODAL MENU SCRIPT
   $(".menu-link").on("click", function(e) {
     if ($("body").hasClass('overlay')) {
       $("body").removeClass("overlay");
     } else {
       $("body").addClass("overlay");
     }
     if ($(this).data("modal")) {
       var modalTarget = $(this).data("modal");
       $("." + modalTarget).parent().toggleClass("active");
       $(this).toggleClass("close");
       e.stopPropagation();
     }
   });
 
   $('body').on('click', function(event) {
     if (!$(event.target).closest('.modal-mask').length) {
       $("body").removeClass("overlay");
       $(".modal-mask").removeClass('active');
       $(".menu-link").removeClass('close');
     }
   });
 });
 
 
 Resources