$(function(){
   $(window).on("mousemove",function(e){
      var w = $(window).width();
      var h =  $(window).height();

      var offsetX = 0.5 - e.pageX / w;
      var offsetY = 0.5 - e.pageY / h;

      $(".parallax").each(function(e,el){
         var offset = parseInt($(el).data("offset"));

         var translate = "translate(" + Math.round(offsetX * offset) + "px,"
         + Math.round(offsety * offset) + "px)"

         $(el).css({
            "transform": translate
         });
      });
   });
   })