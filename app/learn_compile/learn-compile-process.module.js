angular
	.module(
	'learn-compile-process.module.js',
	[
		'ui.router',
		'compile.process.controller',
		'demo-compile-process.directive'
	])
	.config([
		'$stateProvider',
		function ($stateProvider) {

			$stateProvider
				.state(
				'CompileProcessDemo', {
					url: '/compile-process-demo',
					templateUrl: 'learn_compile/learn-compile-process.view.html',
					controller: 'CompileProcessController'
				}
				);
		}
	]);