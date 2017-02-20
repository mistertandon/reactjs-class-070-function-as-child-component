angular
	.module(
	'learn-eval-parse-interpolate.module',
	[
		'ui.router'
	])
	.config(
	[
		'$stateProvider',
		function($stateProvider){

			$stateProvider
			.state(
				'AngularEvalDemo',{
					url: '/angular-eval-demo',
					templateUrl: 'learn_epi/learn-eval.view.html',
					controller: 'AngularEvalController'
				}
			);
		}
	]
	)
	.controller(
		'AngularEvalController',
		[
			'$scope',
			function($scope){

				$scope.title = 'AnngularJS eval implementation.';
			}
		]
	);