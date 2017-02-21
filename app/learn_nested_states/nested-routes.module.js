angular
	.module(
	'nested-routes.module',
	[
		'ui.router',
		'movie.api.provider'
	])
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'RootLevelRoute', {
					url: '/root-level-route',
					views: {
						'': {
							templateUrl: 'learn_nested_states/tree-00-routes.view.html',
							controller: 'Tree00RouteController'
						},
						'tree-11@RootLevelRoute': {
							templateUrl: 'learn_nested_states/tree-11-routes.view.html',
							controller: 'Tree11RouteController'
						}
					},
					data: {
						css: [
							'learn_nested_states/tree-00-routes.view.css',
							'learn_nested_states/tree-11-routes.view.css'
						]
					}
				}
				)
				.state(
				'RootLevelRoute.Tree10Route', {
					url: '/tree-10-route',
					views: {
						'tree-10': {
							templateUrl: 'learn_nested_states/tree-10-routes.view.html',
							controller: 'Tree10RouteController'
						}
					},
					data: {
						css: [

							'learn_nested_states/tree-10-routes.view.css'
						]
					}
				}
				)
				.state(
				'RootLevelRoute.Tree20Route', {
					url: '/tree-20-route',
					views: {
						'tree-20': {
							templateUrl: 'learn_nested_states/tree-20-routes.view.html',
							controller: 'Tree20RouteController'
						}
					},
					data: {
						css: [

							'learn_nested_states/tree-20-routes.view.html'
						]
					}
				}
				);
		}
	]
	)
	.controller(
	'Tree00RouteController',
	[
		'$scope',
		function ($scope) {

			$scope.title = "Hello from `Tree00Route`";
		}
	]
	)
	.controller(
	'Tree10RouteController',
	[
		'$scope',
		'MovieApi',
		function ($scope, MovieApi) {

			$scope.title = "Hello from `Tree10Route`";
			$scope.isMovieInfoLoading = true;

			MovieApi._neOperatorFilteredMoviesList()
				.then(
				function (resultData) {

					$scope.moviesArr = resultData.data;
					$scope.isMovieInfoLoading = false;
				}
				);
		}
	]
	)
	.controller(
	'Tree11RouteController',
	[
		'$scope',
		function ($scope) {

			$scope.title = "Hello from `Tree11Route`";
		}
	]
	)
	.controller(
	'Tree20RouteController',
	[
		'$scope',
		function ($scope) {

			$scope.title = "Hello from `Tree20Route`";
		}
	]
	);
