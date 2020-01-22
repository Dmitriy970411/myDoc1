$(function () {

   var check = $("[data-check]");

   $(check).on("change", function () {
      var category_list = [];
      $("#category :input:checked").each(function () {
         var category = $(this).data("check");
         category_list.push(category);
      });

      console.log(category_list);

      if (category_list.length == 0 || category_list.includes("all")) {
         $("[data-list]").removeClass("hide_block");
      } else {
         $("[data-list]").each(function () {
            var checkList = $(this).data("list");
            if (jQuery.inArray(checkList, category_list) > -1) {
               $(this).removeClass("hide_block");
            } else {
               $(this).addClass("hide_block");
            }
         });
      }
   });
})