$(function () {
   var category = $("[data-cat]");
   $(category).on("click", function () {
      var catItem = $(this).data("cat");
      if (catItem == "all") {
         $("[data-prop]").removeClass("item-hide");
      } else {
         $("[data-prop]").each(function () {
            var propItem = $(this).data("prop");
            if (propItem != catItem) {
               $(this).addClass("item-hide");
            } else if (propItem == catItem) {
               $(this).removeClass("item-hide");
            }
         });
      }

      return false;
   });

})