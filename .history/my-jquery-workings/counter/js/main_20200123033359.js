(function() {

	$('.stat-number').each(function () {
		var size = $(this).text().split(".")[1] ;
		if(!size) {
			var size = 0;
		}
		console.info(size);
		var prop = $(this)
		.prop('Counter', 0);
		console.info(prop);
		// .animate({
		// 	Counter: $(this).text()
		// }, {
		// 	duration: 5000,
		// 	step: function (func) {
		// 		$(this).text(parseFloat(func).toFixed(size));
		// 	}
		// });
	});

})();