(function() {

	$('.stat-number').each(function () {
		var size = $(this).text().split(".")[1] ;
		console.info(size)
		// ? $(this).text().split(".")[1].length : 0;
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