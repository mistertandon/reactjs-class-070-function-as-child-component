(function () {

	angular
		.module('storeFrontApp',
		[
			'ngResource',
			'ngRoute',
			'storeFrontApp.home',
			'storeFrontApp.login',
			'storeFrontApp.user'
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