// (function () {

// 	angular
// 		.module('storeFrontApp',
// 		[
// 			'ngResource',
// 			'ngRoute',
// 			'storeFrontApp.home',
// 			'storeFrontApp.login',
// 			'storeFrontApp.user',
// 			'storeFrontApp.myCustomerDirective',
// 			'storeFrontApp.isolate_scope_d',
// 			'storeFrontApp.directive_link_fn',
// 			'storeFrontApp.directive_transclude'
// 		])
// 		.config([
// 			"$locationProvider",
// 			"$routeProvider",
// 			function ($locationProvider, $routeProvider) {

// 				$locationProvider.hashPrefix('!');
// 				$routeProvider.otherwise({
// 					redirectTo: '/home'
// 				});
// 			}
// 		]);

// })();
(function () {

	angular
		.module(
		'storeFrontApp', [
			'ui.router',
			'storeFrontApp.home',
			'storeFrontApp.user',
			'storeFrontApp.myCustomerDirective',
			'storeFrontApp.isolate_scope_d',
			'storeFrontApp.directive_link_fn',
			'storeFrontApp.directive_transclude',
			'storeFrontApp.router.query_params.module'
		])
		.config([
			'$stateProvider',
			'$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {

				/*
				Alternative syntax to handle 404 route.
								$stateProvider
									.state('noRoute', {
				
										url: '*path',
										template: '<h3>It seems that page has been deleted you are trying to access.</h3>'
									});
				*/

				/**
				 * If url into  url browser not found into any routes configuration,
				 * `$urlRouterProvider` redirect application to `'/'` route.
				 */
				$urlRouterProvider.otherwise('/');
			}
		]);

})();











