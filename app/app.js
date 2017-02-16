(function () {

	angular
		.module('storeFrontApp',
		[
			'ngResource',
			'ngRoute',
			'storeFrontApp.home',
			'storeFrontApp.login',
			'storeFrontApp.user',
			'storeFrontApp.myCustomerDirective'
		])
		.config([
			"$locationProvider",
			"$routeProvider",
			function ($locationProvider, $routeProvider) {

				$locationProvider.hashPrefix('!');
				$routeProvider.otherwise({
					redirectTo: '/home'
				});
			}
		]);

})();