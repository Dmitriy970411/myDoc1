(function() {

	$('.stat-number').each(function (index) {

		var size = $(this).text().split(".")[1];

		console.log(size);

		if(size) {
			var size = size.length;
		}

		if(!size) {
			var size = 0;
		}

		var prop = $(this)
		.prop('Counter', 0);

		console.info(prop);

		$(prop).animate({
			Counter: $(this).text()

		}, {
			duration: 5000,
			step: function (func) {
				if(index == 0 ) {
					var pointNumb = $(this).text(parseFloat(func).toFixed(size));
				}

				if(index != 0) {
					var pointNumb = $(this).text(parseFloat(func).toFixed(size).replace('.', ','));
				}
				 
			}
		});
	});

})();