(function() {

	$('.stat-number').each(function () {
		var size = $(this).text().split(".")[1] ;
		// if(size) {
			var countNumb = $(this).text().split(".")[1].length;
		// }
		
		console.info(size);
		console.info(countNumb);

		// ? : 0;
		// $(this).prop('Counter', 0).animate({
		// 	Counter: $(this).text()
		// }, {
		// 	duration: 5000,
		// 	step: function (func) {
		// 		$(this).text(parseFloat(func).toFixed(size));
		// 	}
		// });
	});

})();