$(document).on('ready', function() {
  // console.log('Hello');
  // console.log(productsData.productsList[0].title);

	var productTemplate = $('#product-template');
	var templateText = productTemplate.html();
	// console.log(templateText);

	var renderProducts = Handlebars.compile(templateText);

	// console.log(renderProducts(productsData.productsList[0]));

	for (var i = 0; i < productsData.productsList.length; i++) {
		// console.log(productsData.productsList[i]);
		var outputHtml = renderProducts(productsData.productsList[i]);
		$('#product-container').append(outputHtml);
	}



	var wishlistTemplate = $('#wishlist-template');
	var wTemplateText = wishlistTemplate.html();
	console.log(wTemplateText);

	var renderWishlist = Handlebars.compile(wTemplateText);
	

	$(document).on('click', '.add', function() {
		console.log(this);
		// var item = renderWishlist($(this).closest('.title'));
		var item = $(this).closest('.product').find('.title').text();
		console.log(item);
		$('#wishlist').append(renderWishlist({title: item}));
		// must be object format?
	});


	$(document).on('click', '.remove', function() {
		console.log(this);
		// var item = renderWishlist($(this).closest('.title'));
		var item = $(this).closest('.wItem').remove();
	});

});