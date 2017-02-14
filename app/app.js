(function () {

	var app = angular.module("store", []);
	var gem = [
		{
			"name": "SAMSUNG Galaxy On5 (Gold, 8 GB)",
			"price": 6990,
			"description": "With a leathery feel, the Samsung Galaxy On5 has a classy look with a thin frame that provides you a comfortable steady grip.",
			"soldOut": false,
			"imgSrc": "http://jquery-plugins.net/image/plugin/thumbnail-grid-with-expanding-preview.jpg",
			"created_at": 1362096000
		}, {
			"name": "SAMSUNG Galaxy On Nxt (Gold, 32 GB)",
			"price": 1590,
			"description": "Flaunt your style with the Samsung Galaxy On Nxt. Featuring a drool-worthy body and impressive features, this smartphone is built to perform",
			"soldOut": true,
			"imgSrc": "http://visuallightbox.com/images/demo/thumbnail_metro.jpg",
			"created_at": 1293836400
		}, {
			"name": "SAMSUNG Gear Fit 2 Black Smartband ",
			"price": 9990.50,
			"description": "Looking good while you are chasing your fitness goals has never been this stylish before. With a sturdy strap, water-resistant body, seamless design and powerful processor the Samsung Gear Fit2 is as efficient as it is attractive.",
			"soldOut": false,
			"imgSrc": "https://f.vimeocdn.com/si/blog/thumb.png",
			"created_at": 1293836400
		}];

	app.controller("StoreController", function () {

		this.products = gem;
	})
})();
