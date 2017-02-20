angular
	.module(
	'learn-apply.module',
	[
		'ui.router'
	]
	)
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'ApplyDemo', {
					url: '/apply-demo',
					templateUrl: 'learn_apply/learn-apply.view.html',
					controller: 'ApplyDemoController'
				}
				);
		}
	]
	)
	.controller(
	'ApplyDemoController',
	[
		'$scope',
		function ($scope) {

			$scope.title = 'AngularJS apply demo';
		}
	]
	);