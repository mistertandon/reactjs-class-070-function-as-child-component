(function () {

	var app = angular.module("store", []);
	var gem = {
		"name": "Samsung Galaxy J7",
		"price": 22,
		"description": "The Samsung Galaxy J7 is powered by 1.5GHz octa-core Samsung Exynos 7580 processor and it comes with 1.5GB of RAM. The phone packs 16GB of internal storage that can be expanded up to 128GB via a microSD card.",
		"canPurchase": true
	};

	app.controller("StoreController", function () {

		this.product = gem;
	})
})();
