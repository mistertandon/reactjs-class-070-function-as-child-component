(function () {

	var app = angular.module("store", []);
	var gem = [
		{
			"name": "SAMSUNG Galaxy On5 (Gold, 8 GB)",
			"price": "6,990",
			"description": "With a leathery feel, the Samsung Galaxy On5 has a classy look with a thin frame that provides you a comfortable steady grip.",
			"soldOut": false
		}, {
			"name": "SAMSUNG Galaxy On Nxt (Gold, 32 GB)",
			"price": "15,900",
			"description": "Flaunt your style with the Samsung Galaxy On Nxt. Featuring a drool-worthy body and impressive features, this smartphone is built to perform",
			"soldOut": true
		}, {
			"name": "SAMSUNG Gear Fit 2 Black Smartband ",
			"price": "9,990",
			"description": "Looking good while you are chasing your fitness goals has never been this stylish before. With a sturdy strap, water-resistant body, seamless design and powerful processor the Samsung Gear Fit2 is as efficient as it is attractive.",
			"soldOut": false
		}];

	app.controller("StoreController", function () {

		this.products = gem;
	})
})();
