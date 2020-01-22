$(function(){

   var smoothScroll = ("[data-scroll]");
   $(smoothScroll).on("click",function(){
      var elScroll = $(this).data("scroll");
       var elOffset = $(elScroll).offset().top;
      $("html,body").animate({
         scrollTop : elOffset},
         2000)
   })

})
