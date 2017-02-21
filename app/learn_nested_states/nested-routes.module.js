angular
	.module(
	'nested-routes.module',
	[
		'ui.router'
	])
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'RootLevelRoute', {
					url: '/root-level-route',
					templateUrl: 'learn_nested_states/nested-routes.view.html',
					controller: 'RootLevelRouteController'
				}
				);
		}
	]
	)
	.controller(
		'RootLevelRouteController',
		[
			'$scope',
			function($scope){

				$scope.title = "Hello from `RootLevelRoute`";
			}
		]
	);