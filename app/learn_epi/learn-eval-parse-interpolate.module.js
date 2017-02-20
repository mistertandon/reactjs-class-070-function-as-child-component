angular
	.module(
	'learn-eval-parse-interpolate.module',
	[
		'ui.router',
		'learn-eval.controller',
		'learn-parse.controller'
	])
	.config(
	[
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'AngularEvalDemo', {
					url: '/angular-eval-demo',
					templateUrl: 'learn_epi/learn-eval.view.html',
					controller: 'AngularEvalController'
				}
				)
				.state(
				'AngularParseDemo', {
					url: '/angular-parse-demo',
					templateUrl: 'learn_epi/learn-parse.view.html',
					controller: 'AngularParseController'
				}
				);
		}
	]
	);