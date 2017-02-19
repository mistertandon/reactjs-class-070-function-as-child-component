angular
	.module(
	'learn.db.module',
	[
		'ui.router',
		'learn.db.controller'
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
					templateUrl: 'learndatab/learn.db.view.html',
					controller: 'DataBindingController'
				}
				);
		}
	]);