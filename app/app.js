(function () {

	angular
		.module('storeFrontApp',
		[
			'ngResource',
			'ngRoute',
			'storeFrontApp.home',
			'storeFrontApp.login',
			'storeFrontApp.user',
			'storeFrontApp.myCustomerDirective',
			'storeFrontApp.isolate_scope_d',
			'storeFrontApp.directive_link_fn',
			'storeFrontApp.directive_transclude'
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