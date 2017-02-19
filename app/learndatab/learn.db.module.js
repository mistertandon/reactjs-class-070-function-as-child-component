angular
	.module(
	'learn.db.module',
	[
		'ui.router',
		'learn.one-way.db.controller'
	]
	)
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'OneWayBindingDemo',
				{
					url: '/one-way-binding-demo',
					templateUrl: 'learndatab/learn.two-way.db.view.html',
					controller: 'OneWayDataBindingController'
				}
				);
		}
	]);