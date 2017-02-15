(function () {

	angular
		.module("storeFrontApp",
		[
			'ngResource',
			'ngRoute',
			'storeFrontApp.home'
		])
		.config([
			"$locationProvider",
			"$routeProvider",
			function ($locationProvider, $routeProvider) {

				$locationProvider.hashPrefix("!");
				$routeProvider.otherwise({
					redirectTo: '/home'
				});
			}
		]);

})();